const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamprofile.html");
const teamArray = [];

// --- Start program --- //
function startApp() {
  newManager();
}

// --- Inquirer used to gather information --- //
function newManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Manager's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Manager's ID number: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Manager's office phone number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Manager's email address: ",
      },
    ])
    .then((inputs) => {
      const manager = new Manager(
        inputs.name,
        inputs.id,
        inputs.officeNumber,
        inputs.email
      );
      console.table(manager);
      teamArray.push(manager);
      addTeam();
    });
}

function addTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What would you like to do?",
        choices: ["Add Engineer", "Add Intern", "Finish"],
      },
    ])
    .then((inputs) => {
      if (inputs.employeeType === "Add Engineer") {
        addEngineer();
      } else if (inputs.employeeType === "Add Intern") {
        addIntern();
      } else {
        finish();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer's ID number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer's email address: ",
      },
      {
        type: "input",
        name: "github",
        message: "Engineer's github username: ",
      },
    ])
    .then((inputs) => {
      const engineer = new Engineer(
        inputs.name,
        inputs.id,
        inputs.email,
        inputs.github
      );
      console.table(engineer);
      teamArray.push(engineer);
      addTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Intern's ID number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Intern's email address: ",
      },
      {
        type: "input",
        name: "school",
        message: "Intern's School: ",
      },
    ])
    .then((inputs) => {
      const intern = new Intern(
        inputs.name,
        inputs.id,
        inputs.email,
        inputs.school
      );
      console.table(intern);
      teamArray.push(intern);
      addTeam();
    });
}
// --- Push to file --- //
function finish() {
  fs.writeFileSync(outputPath, generateHTML(teamArray), "UTF-8");
  console.log("Team Profile created and saved in output folder.");
}

startApp();
