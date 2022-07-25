var connectMysql = require('../../config/db');

class User {
    constructor(user) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.phone = user.phone;
        this.organization = user.organization;
        this.status = user.status ? user.status : 1;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
    // example
    static example(data, result) {
        connectMysql.query(``, data, (err, res) => {
            if(err) {
                console.log('', err);
                result(null, err);
            } else {
                console.log('');
                result(null, res);
            }
        })
    }
    // Create table
    static createTable(result) {
        connectMysql.query(`CREATE TABLE IF NOT EXISTS users(
            id BIGINT UNSIGNED AUTO_INCREMENT,
            user_name VARCHAR(255) NOT NULL,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            organization VARCHAR(255) NOT NULL,
            status TINYINT UNSIGNED DEFAULT 0,
            is_deleted TINYINT UNSIGNED DEFAULT 0,
            created_at DATETIME NOT NULL,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY(id)
        )`, (err, res) => {
            if(err) {
                console.log('Error creating the table', err);
                result(null, err);
            } else {
                console.log('Table created successfully');
                result(null, res);
            }
        })
    }
}


module.exports = User;