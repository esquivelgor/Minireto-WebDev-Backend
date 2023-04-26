import { Router } from "express";
import { getEmployees, getEmployee, createEmployees, patchEmployees, deleteEmployees } from "../controllers/employees.controller.js"

const router = Router()

// ------------ Get endpoings ------------
router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)


// ------------ Post endpoings ------------
router.post('/employees', createEmployees)


// ------------ patch endpoings ------------
router.patch('/employees/:id', patchEmployees)


// ------------ Delete endpoings ------------
router.delete('/employees/:id', deleteEmployees)


export default router 