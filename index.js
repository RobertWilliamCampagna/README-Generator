// import dependencies
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')



// array of questions for user
const questions = [
    {
     type: 'input',
     name: 'name',
     message: 'What is your name? (Required)',
     validate: nameInput => {
         if(nameInput){
         return true;
     }   else {
         console.log('Please enter your name!');
         return false;
     }
    }
    },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email?(Required)', 
        validate: emailInput => {
            if(emailInput){
                return true;
            }   else {
                console.log('Please enter your email!');
                return false;
            }
        }  
       },
       {
        type: 'input',
        name: 'title',
        message: 'What is your project title?(Required)',
        validate: titleInput => {
            if(titleInput){
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }   
       },
       {
        type: 'input',
        name: 'description',
        message: 'Tell us about your project?(Required)',
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            }   else {
                console.log('Please tell us about your project!');
                return false;
            }
        } 
       },
       {
        type: 'input',
        name: 'installation',
        message: 'What command do you need to start this application?(Required)',
        validate: installationInput => {
            if(installationInput){
                return true;
            }   else {
                console.log('Please include command to start this application!');
                return false;
            }
        }   
       },
       {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?(Required)',
        validate: licenseInput => {
            if(licenseInput){
                return true;
            } else {
                console.log('Please include the license of your project!');
                return false;
            }
        }   
       },
       {
        type: 'input',
        name: 'test',
        message: 'What is the command to run test?(Required)',
        validate: testInput => {
            if(testInput){
                return true;
            } else {
                console.log('Please include the command to run test!');
                return false;
            }
        }   
       },
       {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about this application?(Required)',
        validate: usageInput => {
            if(usageInput){
                return true;
            } else {
                console.log('Please include user usage!');
                return false;
            }
        }   
       },
       {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of this application?(Required)',
        validate: contributorsInput => {
            if(contributorsInput){
                return true;
            } else {
                console.log('Please include who the contributors are of this application!');
                return false;
            }
        }   
       },
       {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => {
          if (confirmAbout) {
            return true;
          } else {
            return false;
          }
        }
      }
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
