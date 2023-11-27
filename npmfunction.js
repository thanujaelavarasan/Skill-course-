
const random = import('random');
const { format } =import('date-fns');
const _ = import('lodash');
const axios = import('axios');
const fs = import('fs');

// Function 1: Random Number Generator
function generateRandomNumber(min, max) {
  return random.int(min, max);
}

// Function 2: Date Formatting
function formatDate(date) {
  return format(date, 'MMMM dd, yyyy');
}

// Function 3: String Capitalization
function capitalizeString(str) {
  return _.capitalize(str);
}

// Function 4: HTTP Request
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Function 5: File System Operations
function readFileContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

// Example usage of the functions
console.log('Random Number:', generateRandomNumber(1, 100));
console.log('Formatted Date:', formatDate(new Date()));
console.log('Capitalized String:', capitalizeString('hello world'));

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
fetchData(apiUrl)
  .then(data => console.log('Fetched Data:', data))
  .catch(error => console.error('Error:', error.message));

const fileContent = readFileContent('example.txt');
console.log('File Content:', fileContent);

