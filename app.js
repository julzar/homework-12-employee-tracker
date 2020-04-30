
const mysql = require('mysql');
const chalk = require('chalk');
const util = require('util');

// Connection string for local SQL server
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'password',
    database: 'employee_db'
});

module.exports = connection;

connection.connect( (err) => {
    if (err) throw err;

    console.log(chalk.greenBright(`connected as id ${connection.threadId}`));

    const Queries = require('./tools/queries');
    const queries = new Queries(connection);

    connection.query = util.promisify(connection.query);

    const actions = require('./tools/actions');
    actions.main(queries);
});

