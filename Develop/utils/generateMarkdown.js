// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license==='none') {
        return "";
      }
      return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license==='none') {
        return "";
      }
    return `- [${license}](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license==='none') {
        return "";
      }
    return `## License

This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license.split(' ').join(''))}

  ## Description
  
  - My motivation for this project was ${data.motivation}.
  - Why I built this project ${data.build}.
  - My project solves the problem of ${data.problem}
  - I learned ${data.learn}
  
  ## Table of Contents 
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Description](#description)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributions
  
  ${data.contributions}
  
  ## Tests
  
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any further questions, please check my Github profile or reach me at my personal email address.
  [Github](https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;