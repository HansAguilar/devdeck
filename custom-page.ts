const fs = require('fs');
const path = require('path');
import { access, mkdir } from 'fs/promises';

const createDirIfNotExists = async (dir: string) => {
    try {
        await access(dir);
        console.log(`Inserted your file inside Pages folder directory`);
    } catch (err: any) {
        if (err.code === 'ENOENT') {
            await mkdir(dir);
        } else {
            console.error('Error checking directory:', err);
            throw err; // Re-throw for handling in main function
        }
    }
};

async function createPage(name: string) {
    const pagesDir = './src/app/pages'; // Directory for all pages
    await createDirIfNotExists(pagesDir);

    const pagePath = path.join(pagesDir, name); // Path to the specific page directory (appended)

    // Check if the specific page directory exists
    if (!fs.existsSync(pagePath)) {
        await fs.promises.mkdir(pagePath); // Use promises for async mkdir
    } else {
        console.error(`Page directory ${pagePath} already exists!`);
    }

    // Create the page component file (assuming 'page.tsx')
    const componentPath = path.join(pagePath, 'page.tsx');
    const content = `// This is your new page component
  import React from 'react';

  export default function ${name}() {
    return (
      <div>
        <h1>Hello from ${name}!</h1>
      </div>
    );
  }
  `;

    if (!fs.existsSync(componentPath)) {
        fs.writeFileSync(componentPath, content);
        console.log(`Created page component: ${componentPath}`);
    } else {
        console.error(`Page ${name}.tsx already exists!`);
    }
}

// Get page name from command line arguments
const pageName = process.argv[2];

if (!pageName) {
    console.error('Please provide a page name as an argument.');
} else {
    createPage(pageName);
}
