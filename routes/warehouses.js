import express from "express";
import Warehouse from "..//models/Warehouse.js";
const router = express.Router();

router.get("/", async (req, res) => {
    
    const warehouses = await Warehouse.find();
    res.json({ warehouses });
});

export default router;