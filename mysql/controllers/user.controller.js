const UserModel = require('../models/user.model');
const asyncHandler = require('express-async-handler')

// createTable
const putCreateTable = asyncHandler(async (req, res) => {
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


module.exports = {
    putCreateTable,

}