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
        name: "description",
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "list",
        message: "What License does you project have?",
        name: "license",
        choices: [
            'MIT license',
            'Apache license',
            'Eclipse Public license',
            'ISC license',
            'Mozilla Public license 2.0',
            'ODbL license',
        ],
    },
    {
        type: "input",
        message: "What are the contributing instructions",
        name: "contributing",
    },
    {
        type: "input",
        message: "What tests can you do on the project?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub",
    },
    {
        type: "input",
        message: "Please link your video:",
        name: "video",
    },
    {
        type: "input",
        message: "Is there anyone you would like to give credit to?",
        name: "credit",
    },

];

module.exports = questions