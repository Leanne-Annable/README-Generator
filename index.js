const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What Is the Title of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "Description",
    },
    {
        type: "input",
        message: "Can you list a table of contents?",
        name: "Table of Contents",
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "Installation",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "Usage",
    },
    {
        type: "checkbox",
        message: "What Licence does you project have?",
        name: "Licence",
        choices: [
            'MIT', 
            'Apache', 
            'Microsoft Public Licence', 
            'Eclipse Public Licence', 
            'ISC', 
            'Mozilla Public Licence 2.0', 
            'Open Software Licence 3.0',
        ]
    },
    {
        type: "input",
        message: "What are the contributing instructions",
        name: "Contributing",
    },
    {
        type: "input",
        message: "What are the tests used",
        name: "Tests",
    },
    {
        type: "input",
        message: "Questions",
        name: "Questions",
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
    

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
