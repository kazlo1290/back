const EmployeeModel = require('../models/employee.model');
const asyncHandler = require('express-async-handler')

// get all employee list
const getEmployeeList = asyncHandler(async (req, res) => {
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
})

// get employee by ID
const getEmployeeByID = asyncHandler(async (req, res) => {
    //console.log('get emp by id');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        res.send(employee);
    })
})

// create new employee
const createNewEmployee = asyncHandler(async (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Created Successfully', data: employee.insertId})
        })
    }
})

// update employee
const updateEmployee = asyncHandler(async (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        })
    }
})

// delete employee
const deleteEmployee = asyncHandler(async (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
})

module.exports = {
    getEmployeeList,
    getEmployeeByID,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
}