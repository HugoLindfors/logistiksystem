import express from "express";
import Warehouse from "../Models/WarehouseModel.js";
const router = express.Router();

router.get("/", async (req, res) => {

    const warehouses = await Warehouse.find();
    res.json({ warehouses });
});

router.get("/:warehouse", async (req, res) => {
    const warehouses = await Warehouse.find( { name: req.params.warehouse });
    res.json(warehouses);
});

export default router;