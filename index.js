const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];



function init() {
  console.log(`    
  =================
  Adding employees to the team
  =================
  `);
  inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["manager", "intern", "engineer"]
      },
      {
        type: "input",
        name: "name",
        message: "What is the name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the email?"
      },
      {
        type: "input",
        name: "github",
        message: "What is the GitHub username?",
        when: (answer) => answer.role === "engineer"
      },
      {
        type: "input",
        name: "school",
        message: "What is the school?",
        when: (answer) => answer.role === "intern"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?",
        when: (answer) => answer.role === "manager"
      },
      {
        type: "list",
        name: "addMember",
        message: "Would you like to add more members on your team?",
        choices: ["yes", "no"]
      }
    ])

}

init();
