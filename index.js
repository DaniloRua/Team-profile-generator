const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembers = [];
const render = require("./src/page-template.js");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


function init() {
  console.log(`    
  =================
  Adding employees to the team
  =================
  `);


  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["manager", "intern", "engineer"]
      },
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        when: (answer) => answer.role === "engineer"
      },
      {
        type: "input",
        name: "school",
        message: "What is your school?",
        when: (answer) => answer.role === "intern"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        when: (answer) => answer.role === "manager"
      },
      {
        type: "list",
        name: "addMember",
        message: "Would you like to add more members on your team?",
        choices: ["yes", "no"]
      }
    ])
    .then(function (answer) {
      if (answer.role === "engineer") {
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.github
        );
        teamMembers.push(engineer);
      }
      if (answer.role === "intern") {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );
        teamMembers.push(intern);
      }
      if (answer.role === "manager") {
        const manager = new Manager(
          answer.name,
          answer.id,
          answer.email,
          answer.officeNumber
        );
        teamMembers.push(manager);
      }

      if (answer.addMember === "yes") {
        init();
      } else {
        fs.writeFile(outputPath, render(teamMembers), (error) => {
          if (error) {
            return console.log(error);
          }
          console.log("Team profile generated");
        });
      }
    });
}

init();
