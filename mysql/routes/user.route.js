const express = require('express');
const router = express.Router();

const {
    getCreateTable,
    postCreateUser
} = require('../controllers/user.controller');
// const protect = require('../../middleware/authMiddleware')

// get all employees
router.get('/table', getCreateTable);
router.post('/', postCreateUser);

module.exports = router;