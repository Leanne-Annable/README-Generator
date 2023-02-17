const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions")


// function to write README file
function writeToFile(fileName, data) {
            fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
                err ? console.error(err) : console.log('README successfully written!'))
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then((data) => {
            const filename = `${data.title}-README.md`;
            writeToFile(filename, generateMarkdown(data))
        });
    
};

// function call to initialize program
init();

