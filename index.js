// import dependencies
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')



// array of questions for user
const questions = [
    {
     type: 'input',
     name: 'name',
     message: 'What is your name?'   
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'   
       },
       {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'   
       },
       {
        type: 'input',
        name: 'description',
        message: 'Tell us about your project?'   
       },
       {
        type: 'input',
        name: 'installation',
        message: 'What command do you need to start this application?'   
       },
       {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?'   
       },
       {
        type: 'input',
        name: 'test',
        message: 'What is the command to run test?'   
       },
       {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about this application?'   
       },{
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributors of this application?'   
       },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((res) =>{
    const test = generateMarkdown(res)
    console.log(test)
})
}

// function call to initialize program
init();
