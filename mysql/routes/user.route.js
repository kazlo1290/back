const express = require('express');
const router = express.Router();

const {
    putCreateTable,
} = require('../controllers/user.controller');
// const {protect} = require('../middleware/authMiddleware')

// get all employees
router.get('/table', putCreateTable);

module.exports = router;