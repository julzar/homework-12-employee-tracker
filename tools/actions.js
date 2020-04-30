const inquirer = require('inquirer');
const _ = require('lodash');
const chalk = require('chalk');

const interface = require('./interface');

// Ask function
async function ask(data) {
    return await inquirer.prompt(data);
};

// Exit function
function exit(){
    const connection = require('../app');
    connection.end()
    console.log(chalk.greenBright(`--Task complete--`))
    process.exit(0)
};

// Create function
async function create(data, main) {
    try { 
        const actions = {
            addNewDepartment: async () => {
                const res = await ask(interface.create.addDepartment);
                await data.addNew(res, 'departments');
                main(data);
            },
            addNewRole: async () => {
                const res = await ask(interface.create.addRole);
                await data.addNew(res, 'roles');
                main(data);
            },
            addNewEmployee: async () => {
                const res = await ask(interface.create.addEmployee);
                if (res.managerId === '') {
                    delete res.managerId;
                };
                await data.addNew(res, 'employees');
                main(data);
            }
        };
        const res = await ask(interface.create.cMain);
        actions[_.camelCase(res.choice)]();
    }
    catch (err) {
        throw err
    };
};

// Read function
async function read(data, main) {
    try {
        const actions = {
            viewAllDepartments: async () => {
               await data.viewAll('departments');
               main(data);
            },
            viewAllRoles: async () => {
                await data.viewAll('roles');
                main(data);
            },
            viewAllEmployees: async () => {
                await data.viewAll('employees');
                main(data);
            },
            viewEmployeesByManager: async () => {
                const res = await ask(interface.read.viewByManager);
                await data.viewByManager(res.id);
                main(data);
            }
        };
        const res = await ask(interface.read.rMain);
        actions[_.camelCase(res.choice)]();
    }
    catch (err) {
        throw err
    }
};

// Update function
async function update(data, main) {
    try {
        const actions = {
            updateEmployeeManager: async () => {
                const res = await ask(interface.update.updateManager);
                await data.updateEmployee( [{managerId: res.managerId}, {id: res.id}] );
                main(data);
            },
            updateEmployeeRole: async () => {
                const res = await ask(interface.update.updateRole);
                await data.updateEmployee( [{roleId: res.roleId}, {id: res.id}] );
                main(data);
            }
        };
        const res = await ask(interface.update.uMain);
        actions[_.camelCase(res.choice)]();
    }
    catch (err) {
        throw err;
    };
};

// Main function
async function main(data) {
    try {
        const actions = {
            create: create,
            read: read,
            update: update,
            delete: () => {
                console.log(`You've chosen to ${res.choice}`);
            },
            exit: exit
        };
        const res = await ask(interface.mainMenu);
        actions[res.choice.toLowerCase()](data, main);
    }
    catch (err) {
        throw err
    };
};

module.exports = {
    ask: ask,
    exit: exit,
    create: create,
    read: read,
    update: update,
    // delete: delete,
    main: main
}