import express from "express";
import Order from "..//models/Order.js";
const router = express.Router();


router.get("/", async (req, res) => {
    
    const orders = await Order.find();
    res.json({ orders });

});

export default router;