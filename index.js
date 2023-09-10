// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
    },
    {type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
    },  
    {type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:'
    },
    {type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines for your project:'
    },
    {type: 'input',
    name: 'test',
    message: 'Please provide test instructions for your project:'
    },
    {type: 'list',
    name: 'email',
    message: 'Please enter your email address:',
    },
    {type: 'list',
    name: 'github',
    message: 'Please enter your GitHub username:',
    },
    {type: 'list',
    name: 'license',
    message: 'Please select a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your README.md file has been generated.")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
