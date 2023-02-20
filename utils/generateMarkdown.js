let licenceText = "";
let licenceBadge = "";

// badge links
const MIT= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const Apache= "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const Eclipse= "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
const ISC= "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
const Mozilla= "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
const ODbL= "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";

// function to generate markdown for README
function generateMarkdown(data) {
  let licence = data.licence;
  function getLicenceBadge(licence) {
    switch (licence) {
      case "MIT":
        licenceBadge = MIT;
        licenceText = "MIT Licence";
        break;
      case "Apache":
        licenceBadge = Apache;
        licenceText = "Apache Licence";
        break;
      case "Eclipse":
        licenceBadge = Eclipse;
        licenceText = "Eclipse Public Licence";  
        break;
      case "ISC":
        licenceBadge = ISC;
        licenceText = "ISC Licence";
        break;
      case "Mozilla":
        licenceBadge = Mozilla;
        licenceText = "Mozilla Public Licence 2.0"; 
        break;
      case "ODbL":
        licenceBadge = ODbL;
        licenceText = "ODbL Licence";
        break;               
  }
  getLicenceBadge(licence);
}
  
  return `
  ${licenceBadge} 
  
  
  # ${data.Title}
  

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Video](#video)
  * [Licences](#licences)
  * [Contribution](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Questions](#questions)
  
  
  ## Description
  
  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Video
  ${data.video}

  ## Licences

  ${data.licence}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Credits
  ${data.credit}

  ## Questions

  - If you have any questions about the repo, please contact me on: 
  
  - email: ${data.email}

  - GitHub: ${data.GitHub}
`;
}

module.exports = generateMarkdown;
