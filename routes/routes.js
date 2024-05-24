import express from 'express'
import {getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.js'

const router = express.Router()

// A) Now, we can establish our routes

// Route to get all the employees
// Route to create employees
router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)

// How to get a specific employee
// How to update an employee
// How to delete an employee
router.route('/api/employees/:id')
    .get(getEmployee)
    .patch(updateEmployee)
    .delete(deleteEmployee)


export default router

