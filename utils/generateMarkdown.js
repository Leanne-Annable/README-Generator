// function to generate markdown for README
function generateMarkdown(data) {
  // do a for loop or if statement to show the licence badge at the top
  return `
  
  # ${data.Title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licences](#licence)
  * [Contribution](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Licences

  ${data.licence}

  ## Contributing

  ${data.contributing}

  ##Tests

  ${data.tests}

  ## Questions

  ${data.questions}

`;
}

module.exports = generateMarkdown;
