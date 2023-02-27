// function to generate markdown for README
function generateMarkdown(questionData) {
  let licenseBadge = "";
  let license = questionData.license;
  switch (license) {
    case "MIT license":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache license":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Eclipse Public license":
      licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "ISC license":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "Mozilla Public license 2.0":
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "ODbL license":
      licenseBadge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
      break;
    default:
      console.log("You have not selected a License")
      break;
  };

  return `# ${questionData.Title}

  ${licenseBadge}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Screenshot](#screenshot)
  * [Video](#video)
  * [Licences](#licences)
  * [Contribution](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Questions](#questions)
  
  
  ## Description
  
  ${questionData.description}

  ## Installation

  ${questionData.installation}

  ## Usage

  ${questionData.usage}

  ## Screenshot

  An Image of the project in use:

  ![${questionData.screenshot}](./assets/images/${questionData.screenshot}.jpg)

  ## Video
  ${questionData.video}

  ## Licences

  This project is using the ${questionData.license}

  ## Contributing

  ${questionData.contributing}

  ## Tests

  ${questionData.tests}

  ## Credits
  ${questionData.credit}

  ## Questions

  - If you have any questions about the repo, please contact me on: 
  
  - email: <a href="mailto:${questionData.email}">${questionData.email}</a>
  

  - GitHub: <a href="https://github.com/${questionData.GitHub}" target="_blank" rel="noopener noreferrer">${questionData.GitHub}</a>
`;
}

module.exports = generateMarkdown;
