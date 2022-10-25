import express from "express";
import Employee from "../Models/EmployeeModel.js";
const router = express.Router();

router.get("/", async (req, res) => {

    const employees = await Employee.find();
    res.json( { employees } );
});

router.get("/:name", async (req, res) => {

    const employee = await Employee.findOne({ name: req.params.name.toLowerCase() });
    console.log(employee);
    res.json( { employee } );
});

export default router;