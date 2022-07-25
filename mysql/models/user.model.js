var connectMysql = require('../../config/db');

class User {
    constructor(user) {
        this.user_name = user.user_name;
        this.name = user.name;
        this.phone = user.phone;
        this.email = user.email;
        this.organization = user.organization ? user.organization : 0;
        this.status = user.status ? user.status : 1;
        this.password = user.password;
        this.token = user.token;
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
            name VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            email VARCHAR(255) NOT NULL,
            organization VARCHAR(255) NOT NULL,
            status TINYINT UNSIGNED DEFAULT 0,
            password VARCHAR(255) NOT NULL,
            token VARCHAR(255) NOT NULL,
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
    // Create user
    static createUser(userData, result) {
        connectMysql.query('INSERT INTO users SET ? ', userData, (err, res) => {
            if(err) {
                console.log('can\'t create user account', err);
                result(null, err);
            } else {
                console.log('Account created successfully');
                result(null, res);
            }
        })
    }
    static userNameExists(userName, result) {
        connectMysql.query('SELECT user_name FROM `users` WHERE user_name=?', userName, (err, res)=>{
            if(result.length === 0){
                console.log(userName + ' not exists');
                result(null, res);
            } else {
                console.log(userName + ' exists');
                result(null, err);
            }
        })
    }
    static userPhoneExists(userPhone, result) {
        connectMysql.query('SELECT phone FROM `users` WHERE phone=?', userPhone, (err, res) => {
            if(result.length === 0){
                console.log(userPhone + ' not exists');
                result(null, res);
            } else {
                console.log(userPhone + ' exists');
                result(null, err);
            }
        })
    }
    static userEmailExists(userEmail, result) {
        connectMysql.query('SELECT email FROM `users` WHERE user_name=?', userEmail, (err, res) => {
            if(result.length === 0){
                console.log(userEmail + ' not exists');
                result(null, res);
            } else {
                console.log(userEmail + ' exists');
                result(null, err);
            }
        })
    }
}


module.exports = User;