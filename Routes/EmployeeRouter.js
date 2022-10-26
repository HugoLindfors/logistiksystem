import express from "express";
import Employee from "../Models/EmployeeModel.js";
const router = express.Router();

router.get("/", async (req, res) => {

    const employees = await Employee.find();
    res.json( { employees } );
});

router.get("/on/:weekday", async (req, res) => {
    
});

export default router;