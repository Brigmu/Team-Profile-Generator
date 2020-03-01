const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./lib/htmlRenderer');

let questions = [
    {
        message: 'Enter employee name',
        name: 'name'
    },
    {
        message: 'Enter employee ID',
        name: 'id'
    },
    {
        message: 'Enter employee email',
        name: 'email'
    }
];

const managerQuestion = {
    message: 'Enter office number',
    name: 'officeNumber'
}

const engineerQuestion = {
    message: 'Enter employee github username',
    name: 'github'
}

const internQuestion = {
    message: 'Enter employee school',
    name: 'school'
}

const employees = [];

const init = async function () {
    try {
        const { begin } = await inquirer.prompt([
            {
                type: 'list',
                message: 'Create a new team',
                name: 'begin',
                choices: ['Yes', 'No']
            }
        ]);

        if (begin === 'Yes') {

            promptData();

        }
    } catch (error) {
        console.log(error);
    }
}

const promptData = async function() {
    try {    
        const {employeeType} = await inquirer.prompt([
            {
                type: 'list',
                message: 'Choose type of employee',
                name: 'employeeType',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
    
        // console.log(employeeType);
    
        if(employeeType === 'Manager'){
            questions.push(managerQuestion);
            const {name, id, email, officeNumber} = await inquirer.prompt(questions);
            const a = new Manager(name, id, email, officeNumber);
            questions = questions.splice(0, 3);
    
            employees.push(a);
            // console.log(employees);
    
            const {addPrompt} = await inquirer.prompt([
                {
                    type: 'list',
                    message: 'Add another employee?',
                    name: 'addPrompt',
                    choices: ['Yes', 'No']
                }
            ]);
    
            if(addPrompt === 'No') {
                createFile();
            } else {
                promptData();

            }
            // const test1 = a.getRole();
            // console.log(test1);
            // const test2 = a.getName();
            // console.log(test2);
            // const test3 = a.getId();
            // console.log(test3);
            // const test4 = a.getOfficeNumber();
            // console.log(test4);
        }
        else if (employeeType === 'Engineer') {
            questions.push(engineerQuestion);
            const {name, id, email, github} = await inquirer.prompt(questions);
            const b = new Engineer(name, id, email, github);
            questions = questions.splice(0, 3);
    
            employees.push(b);
            // console.log(employees);
    
            const {addPrompt} = await inquirer.prompt([
                {
                    type: 'list',
                    message: 'Add another employee?',
                    name: 'addPrompt',
                    choices: ['Yes', 'No']
                }
            ]);
    
            if(addPrompt === 'No') {
                createFile();
            }else {
                promptData();

            }
    
        }
        else if (employeeType === 'Intern') {
            try {
                questions.push(internQuestion);
                const { name, id, email, school } = await inquirer.prompt(questions);
                const c = new Intern(name, id, email, school);
                questions = questions.splice(0, 3);
    
                employees.push(c);
                // console.log(employees);
    
                const { addPrompt } = await inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Add another employee?',
                        name: 'addPrompt',
                        choices: ['Yes', 'No']
                    }
                ]);
    
                if (addPrompt === 'No') {
                    createFile();
                } else {
                    promptData();
                    
                    // const { teamName } = await inquirer.prompt([
                    //     {
                    //         message: 'Enter team name',
                    //         name: 'teamName'
                    //     }
                    // ]);
                    
                    
                }
    
            }
        
            catch (error) {
                console.log(error);
            }
        }
        }
        catch (error) {
            console.log(error);
        }
    }

const createFile = () => {
    const html = render(employees);
    fs.writeFile(outputPath, html, (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Wrote file');
    })
}
    
    
init();
