const express = require('express');
const router = express.Router();

const {
    getEmployeeList,
    getEmployeeByID,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
} = require('../controllers/employee.controller');
// const {protect} = require('../middleware/authMiddleware')

// get all employees
router.get('/', getEmployeeList);

// get employee by ID
router.get('/:id', getEmployeeByID);
// create new employee
router.post('/', createNewEmployee);
// update employee
router.put('/:id', updateEmployee);
// delete employee
router.delete('/:id', deleteEmployee);
module.exports = router;