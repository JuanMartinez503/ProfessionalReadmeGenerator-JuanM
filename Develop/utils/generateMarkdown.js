// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  }
  return `- [${license}](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  }
  return `## License

  - This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //uses template literals to get the data provided by the use in the terminal
  return `# ${data.title} ${renderLicenseBadge(
    data.license.split(" ").join("")
  )}

  ## Description
  
  - My motivation for this project was ${data.motivation}.
  - Why I built this project ${data.build}.
  - My project solves the problem of ${data.problem}.
  - I learned ${data.learn}.
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Description](#description)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  
  - ${data.installation}
  
  ## Usage
  
  - ${data.usage}
  
  ## Contributions
  
  - ${data.contributions}
  
  ## Tests
  
  - ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any further questions, please check my Github profile or reach me at my personal email address.
  - [Github](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
//exports the function so it can be used in other files
