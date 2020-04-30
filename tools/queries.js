
class Queries {
    constructor(connection) {
        this.connection = connection;
    }
    // Create
    async addNew(options, i) {
        try {
            console.table(await this.connection.query(`INSERT INTO ${i} SET ?;`, options ));
        }
        catch (err) {
            throw err
        }
    }
    // Read
    async viewAll(i) {
        try {
            console.table(await this.connection.query(`SELECT * FROM ${i};` ));
        }
        catch (err) {
            throw err
        }
    }
    async viewByManager(i) {
        try {
            console.table(await this.connection.query(`
            SELECT underling.*
            FROM employees As underling
            JOIN employees	As overling
            ON underling.managerId = overling.id
            WHERE overling.id = '${i}';` ));
        }
        catch (err) {
            throw err
        }
    }
    // Update
    async updateEmployee(options) {
        try {
            console.log(options);
            console.table(await this.connection.query(`UPDATE employees SET ? WHERE ?;`, options ));
        }
        catch (err) {
            throw err
        }
    }

}

module.exports = Queries;