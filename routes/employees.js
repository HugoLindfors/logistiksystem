import express from "express";
import Employee from "..//models/Employee.js";
const router = express.Router();

router.get("/", async (req, res) => {
    
    const employees = await Employee.find();
    res.json({ employees });

});

export default router;