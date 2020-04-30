const interface = {
    // 'Main' menu items
    mainMenu: [
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'Create',
                'Read',
                'Update',
                'Delete',
                'Exit'
            ]
        }
    ],

    // 'Create' menu items
    create: {
        cMain: [{
            type: 'list',
            name: 'choice',
            message: 'Choose one:',
            choices: [
                'Add new department',
                'Add new role',
                'Add new employee'
            ]
        }],
        //
        addDepartment: [
            {
                type: 'input',
                name: 'department',
                message: 'Enter a department name:'
            }
        ],
        //
        addRole: [
            {
                type: 'input',
                name: 'title',
                message: 'Enter a role title:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter a salary $ amount(e.g. 50000):'
            },
            {
                type: 'input',
                name: 'depId',
                message: 'Enter the id# of the department this role belongs to:'
            }
        ],
        //
        addEmployee: [
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the employee\'s first name:'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the employee\'s last name:'
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter the id# of this employee\'s role:'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter the id# of this employee\'s manager (if applicable):'
            },
        ]
    },

    // 'Read' menu items
    read: {
            rMain: [{
                type: 'list',
                name: 'choice',
                message: 'Choose one:',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'View employees by manager'
                ]
            }],
            //
            viewByManager : [{
                type: 'input',
                name: 'id',
                message: 'Enter a manager\'s id#:'
            }]
         
    },

    // 'Update' menu items
    update: {
        uMain: [{
            type: 'list',
            name: 'choice',
            message: 'Choose one:',
            choices: [
                'Update employee manager',
                'Update employee role'
            ]
        }],
        //
        updateManager: [
            {
                type: 'input',
                name: 'id',
                message: 'Enter the id# of the employee:'
            },
            {
            type: 'input',
            name: 'managerId',
            message: 'Enter the id# of the new manager:'
            }
        ],
        //
        updateRole: [
            {
                type: 'input',
                name: 'id',
                message: 'Enter the id# of the employee:'
            },
            {
            type: 'input',
            name: 'roleId',
            message: 'Enter the id# of the new role:'
            }
        ],
    },

    // 'Delete' menu items
}

module.exports = interface