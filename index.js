const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions")


// function to write README file
function writeToFile(questionData) {
            // takes the answers and creates a README file
            fs.writeFile(`README.md`, questionData, (err) =>
                // cheacks for errors and pings back the error code, or lets the user know the file has been created
                err ? console.error(err) : console.log('README successfully written!'))
};

// function to initialize program
function init() {
    // ask the user the questions in other js file
    inquirer.prompt(questions)
        // take the answers and use them in the function to write the file
        .then((questionData) => {writeToFile(generateMarkdown(questionData))});        
};

// function call to initialize program
init();

