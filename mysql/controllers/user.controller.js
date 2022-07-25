const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/user.model');

// createTable
const getCreateTable = asyncHandler(async (req, res) => {
    UserModel.createTable((err, table) => {
        // console.log('We are here');
        if (err) {
            res.send(err);
        } else {
            console.log('Table', table);
            res.send(table);
        }
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: '5d',
    });
}

// Create user
const postCreateUser = asyncHandler(async (req, res) => {
    const { user_name, name, phone, email, password } = req.body;

    if(!user_name || !name || !password) {
         res.status(400)
         throw new Error('Утга нэмнэ үү')
    }
    // const userName = user_name
    // const userPhone = phone
    // const userEmail = email
    // Нууц үг Hash
    const salt = await bcrypt.genSalt(10)
    const user_name_lower = user_name.toLowerCase();
    const email_lower = email.toLowerCase();
    const hashedPassword = await bcrypt.hash(password, salt)
    const userData = new UserModel({
        user_name: user_name_lower,
        name,
        phone,
        email: email_lower,
        password: hashedPassword,
        token: generateToken(password),
    });

    console.log('userData ->> ', userData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else {
        UserModel.createUser(userData, (err, user) => {
            if (err) {
                res.send('Failed', err);
            } else {
                res.json({
                    status: true,
                    message: 'Account created successfully',
                    dataID: user.insertId
                });
            }
        })
    }
})
module.exports = {
    getCreateTable,
    postCreateUser
}