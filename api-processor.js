const http = require('http');
const fs = require('fs');

// Function to make HTTP GET request and return promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let data = '';

            // Handle HTTP errors
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP Error: ${response.statusCode}`));
                return;
            }

            // Collect data chunks
            response.on('data', (chunk) => {
                data += chunk;
            });

            // Process complete response
            response.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (error) {
                    reject(new Error('Error parsing JSON: ' + error.message));
                }
            });
        }).on('error', (error) => {
            reject(new Error('Error fetching data: ' + error.message));
        });
    });
}

// Function to process the data
function processData(data) {
    // Example processing: Extract post titles and their length
    return data.map(post => ({
        title: post.title,
        titleLength: post.title.length,
        id: post.id
    }));
}

// Function to save data to file
function saveToFile(data, filename) {
    return new Promise((resolve, reject) => {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFile(filename, jsonData, 'utf8', (error) => {
            if (error) {
                reject(new Error('Error saving file: ' + error.message));
            } else {
                resolve('Data successfully saved to ' + filename);
            }
        });
    });
}

// Main function to orchestrate the process
async function main() {
    try {
        console.log('Fetching data...');
        const data = await fetchData('http://jsonplaceholder.typicode.com/posts');
        
        console.log('Processing data...');
        const processedData = processData(data);
        
        console.log('Saving results...');
        const result = await saveToFile(processedData, 'processed_data.json');
        
        console.log(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Run the program
main();
