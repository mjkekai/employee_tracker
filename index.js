require("dotenv").config();
const inquirer = require("inquirer");
const connection = require("./config/connection");
require("console.table");

const startApp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "pick",
        message: "What would you like to do?",
        choices: [
          "view employees",
          "view department",
          "view roles",
          "add employee",
          "add department",
          "add role",
          "Update employee role",
          "I good, no more",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.pick) {
        case "view employees":
          viewEmployee();
          break;
        case "view department":
          viewDepartment();
          break;
        case "view roles":
          viewRoles();
          break;
        case "add employee":
          addEmployee();
          break;
        case "add department":
          addDepartment();
          break;
        case "add role":
          addRole();
          break;
        case "update employee role":
          updateEmployeeRole();
          break;
        default:
          connection.end();
          break;
      }
    });
};

const viewDepartment = async () => {
  connection.query(
    `
      SELECT 
        *
      FROM 
        department;
    `,
    (err, data) => {
      if (err) throw err;
      console.log("\n");
      console.table(data);
      startApp();
    }
  );
};

const viewEmployee = async () => {
  connection.query(
    `
      SELECT 
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        department.name AS department, 
        role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
      FROM 
        employee 
          LEFT JOIN role on employee.role_id = role.id 
          LEFT JOIN department on role.department_id = department.id 
          LEFT JOIN employee manager on manager.id = employee.manager_id;
    `,
    (err, data) => {
      if (err) throw err;
      console.log("\n");
      console.table(data);
      startApp();
    }
  );
};

const addRole = () => {

  //ask questions 
  this.connection.query("INSERT INTO role SET ?", role);
  role = {
    title: "",
    salary: 0,
    department_id: 0
    }

  connection.query(
    `
      SELECT 
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        department.name AS department, 
        role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
      FROM 
        employee 
          LEFT JOIN role on employee.role_id = role.id 
          LEFT JOIN department on role.department_id = department.id 
          LEFT JOIN employee manager on manager.id = employee.manager_id;
    `,
    (err, data) => {
      if (err) throw err;
      console.log("\n");
      console.table(data);
      startApp();
    }
  );
};

this.connection.query(
  "UPDATE employee SET role_id = ? WHERE id = ?",
  [roleId, employeeId]
)

startApp();
