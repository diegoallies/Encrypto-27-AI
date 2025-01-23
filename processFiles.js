const fs = require('fs');
const path = require('path');

// New GitHub URL to replace
const newGitHubUrl = 'https://github.com/diegoallies/Encrypto-27-AI';
// Words to search and replace
const wordMappings = {
  'ENCRYPTO': 'ENCRYPTO',
  'Encrypto': 'Encrypto',
  'Encrypto': 'Encrypto',
  '': '', // '' should be removed
  '\x20': '' // '\x20' should also be removed
};

// Function to process each file
const processFile = (filePath) => {
  if (filePath.toLowerCase() === 'readme.md' || filePath.toLowerCase() === 'index.js') {
    return; // Ignore README.md and index.js files
  }

  if (filePath.includes('.git')) {
    return; // Ignore files in the .git directory
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace GitHub URL
  content = content.replace(/https:\/\/github.com\/mrfrank-ofc\/ENCRYPTO-MD/g, newGitHubUrl);
  
  // Apply word mappings
  Object.keys(wordMappings).forEach((word) => {
    const replacement = wordMappings[word];
    const regExp = new RegExp(word, 'g');  // Global search for word
    content = content.replace(regExp, replacement);
  });

  // Save the modified content back to the file
  fs.writeFileSync(filePath, content, 'utf-8');
};

// Function to recursively search for files in directories
const searchFiles = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      searchFiles(filePath); // Recursively search subdirectories
    } else if (stats.isFile()) {
      processFile(filePath);
    }
  });
};

// Start processing from the current directory
searchFiles(__dirname);
