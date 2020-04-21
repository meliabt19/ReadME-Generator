const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);

// Input Questions//
const questions = [
{
    type: "input",
    message: "Enter your Github Username",
    name: "username",
},
{
    type: "input",
    message: "What's the name of your project",
    name: "title",
},
{
    type: "input",
    message: "A brief description of your project",
    name: "description",
},
{
    type: "input",
    message: "List Instructions for use or installation",
    name: "installation",
},
{
    type: "input",
    message: "Scenarios that it can be used",
    name: "scenarios",
},
{
    type: "input",
    message: "Licensing Information",
    name: "licensing",
},
{
    type: "input",
    message: "List Project Contributors",
    name: "contributes",
},
{
    type: "input",
    message: "Does the repository have any tests",
    name: "tests",
},
];

function promptUser() {
    return inquirer.prompt(questions);
  }
  function generateMarkdown(answers) {
    return `#${answers.title}

    ${answers.description}
    ${answers.installation}
    ${answers.scenarios}
    ${answers.licensing}
    ${answers.contributes}
    ${answers.tests}
    
   `;
  }
  async function init() {
    try {
      const answers = await promptUser();
  
      const markdown = generateMarkdown(answers);
  
      await writeFileAsync("NewReadMe.md", markdown);
    } catch (err) {
      console.log(err);
    }
  }
  
  
  init();