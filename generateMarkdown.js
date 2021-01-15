// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
## Table of Contents
*[Description](#description)<br>
*[License](#license)<br>
*[Test](#test)<br>
*[Usage](#usage)<br>
*[Contributors](#contributors)<br>
*[Installation](#installation)<br>
*[About](#about)

## Description
${data.description}

## License
${data.license}

## Test
${data.test}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Installation
${data.installation}

## About
${data.name}
${data.email}
${data.about}
  `;
}

module.exports = generateMarkdown;
