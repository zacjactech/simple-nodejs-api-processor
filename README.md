

---

# simple-nodejs-api-processor

This project is a Node.js application that fetches data from an external API, processes it, and saves the processed data to a local file. The application is built using the native `http` and `fs` modules and performs the following tasks:

1. Makes an HTTP GET request to fetch data.
2. Processes the data (in this example, it extracts post titles and their lengths).
3. Saves the processed data to a JSON file.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [File Structure](#file-structure)
- [License](#license)

# Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Ensure you have Node.js installed. You can check this by running:
   ```bash
   node -v
   ```

# Usage

To run the application, execute:

```bash
node api-processor.js
```

The application will fetch data from `http://jsonplaceholder.typicode.com/posts`, process it, and save the results in `processed_data.json`.

# Functions

# fetchData(url)

- *Description*: Fetches data from the given URL using an HTTP GET request and returns a promise that resolves with the parsed JSON data.
- *Parameters*:
  - `url` (string): The URL to make the GET request to.
- *Returns*: Promise with the parsed JSON data.

# processData(data)

- *Description*: Processes the fetched data by extracting post titles and their lengths.
- *Parameters*:
  - `data` (Array): Array of post objects from the API.
- *Returns*: An array of objects containing the `title`, `titleLength`, and `id` of each post.

# saveToFile(data, filename)

- *Description*: Saves the processed data to a specified file in JSON format.
- *Parameters*:
  - `data` (Array): Array of processed data to save.
  - `filename` (string): Name of the file to save the data in.
- *Returns*: Promise that resolves with a success message when the file is saved.

# main()

- *Description*: The main function that orchestrates the data fetching, processing, and saving.
- *Steps*:
  1. Fetches data from the API.
  2. Processes the data.
  3. Saves the processed data to `processed_data.json`.
  4. Logs the result or any error encountered during the process.

# File Structure

- *api-processor.js*: Main script to fetch, process, and save data.
- *processed_data.json*: Output file where the processed data is saved.
- *README.md*: Documentation for the project.
- *LICENSE*: License for the project.

# License

This project is open-source and available under the MIT License.

---
