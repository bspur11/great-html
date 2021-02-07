// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// If there's no 'projects' array property, create one

// if (!portfolioData.projects) {
//   portfolioData.projects = [];
// }

// TODO: Create an array of questions for user input
const promptDev = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',

      validate: nameInput => {
        if (nameInput) {
          return true
        } else {
          console.log('Please enter your project name!');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project? (Required)',

      validate: descriptionInput => {
        if (descriptionInput) {
          return true
        } else {
          console.log('Please enter a description!');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'content',
      message: 'Would you like a Table of Contents for your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? (Required)',

      validate: installationInput => {
        if (installationInput) {
          return true
        } else {
          console.log('Please enter your project name!');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will people use your project? (Required)',

      validate: usageInput => {
        if (usageInput) {
          return true
        } else {
          console.log('Please enter your project name!');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Do you have any collaborators you would like to credit? (Required)',
    },
    {
      type: "list",
      message: "Select license",
      name: "License",
      choices: [
          "MIT",
          "GVL-GPL 3.0",
          "APACHE 2.0",
          "BSD 3",
          "None"
      ]
  },
    {
      type: 'input',
      name: 'badges',
      message: 'Include any badges for your project? ',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Are there features in your project that you would like to list? ',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Any guildelines for contributors to  your project? ',
    },
    {
      type: 'confirm',
      name: 'tests',
      message: 'Have you writen any tests for your project? ',
    },
    
    {
      type: 'input',
      name: 'tests',
      message: 'What tests have you writen for your project? ',
      
      when: ({
        confirmInput
      }) => {
        if (confirmInput) {
          return true
        } else {
          return false
        }
      }
    },
  ]);
};
// TODO: Create a function to write README file
// function (fileName, data) { }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
promptDev()