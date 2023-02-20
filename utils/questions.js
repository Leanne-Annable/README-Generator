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
        type: "checkbox",
        message: "What Licence does you project have?",
        name: "licence",
        choices: [
            'MIT',
            'Apache',
            'Eclipse Public Licence',
            'ISC',
            'Mozilla Public Licence 2.0',
            'ODbL',
        ],
        // badges: {
        //     MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        //     Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        //     Eclipse: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        //     ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        //     Mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        //     ODbL: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
        // },
    },
    {
        type: "input",
        message: "What are the contributing instructions",
        name: "contributing",
    },
    {
        type: "input",
        message: "What tests can you do?",
        name: "tests",
    },
    {
        type: "input",
        message: "Questions",
        name: "questions",
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
];

module.exports = questions