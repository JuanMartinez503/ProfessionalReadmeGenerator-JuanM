// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const generateMarkdown = require("./utils/generateMarkdown");
const { log } = require("util");
const { error } = require("console");

// TODO: Create an array of questions for user input
const questions = [
  //the questions that I used for my application
  {
    type: "input",
    message: "What is the title for your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What was the motivation for your project?",
    name: "motivation",
  },
  { type: "input", message: "Why did you build your project?", name: "build" },
  {
    type: "input",
    message: "What problems does your project solve?",
    name: "problem",
  },
  {
    type: "input",
    message: "What did you learn from your project?",
    name: "learn",
  },
  {
    type: 'input',
    message:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    name: 'installation'
  },
  {
    type:'input',
    message:'Who contributed on this project?',
    name:'contributions'
  },
  {
    type:'input',
    message:'Provide instructions and examples of how to use your application?',
    name:'usage'
  },
  {
    type:'list',
    message:'What license do you want to use for your project?',
    choices: [  "none","Apache License 2.0",  "GNU General Public License v3.0",  "GNU Library or 'Lesser' General Public License v3.0",  "MIT License",  "BSD 2-Clause 'Simplified' License",  "BSD 3-Clause 'New' or 'Revised' License",  "Boost Software License 1.0",  "Creative Commons Zero v1.0 Universal",  "Eclipse Public License 2.0",  "GNU Affero General Public License v3.0",  "GNU Affero General Public License v3.0 with Autoconf exception",  "GNU Affero General Public License v3.0 with GCC Runtime Library Exception",  "GNU Affero General Public License v3.0 with Library exception",  "GNU Lesser General Public License v2.1",  "GNU Lesser General Public License v3.0",  "Mozilla Public License 2.0",  "The Unlicense"],
    name: 'license'
  },
  {
    type: 'input',
    message: 'What test were done on your application?',
    name:'test'
  },
  {
    type: 'input',
    message:'What is your github username?',
    name: 'github'
  },
  {
    type:'input',
    message:'What is your email address?',
    name: 'email'
  }
  
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFile(fileName, data)
    .then(console.log('success!'))
    .catch(console.error(error))

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile('output/README.md',generateMarkdown(data))
  });
}

// Function call to initialize app
init();
