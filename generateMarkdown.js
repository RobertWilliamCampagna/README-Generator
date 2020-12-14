// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

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
