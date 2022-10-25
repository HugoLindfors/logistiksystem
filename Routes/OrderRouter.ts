import express from "express";
import Order from "../Models/OrderModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
    
    const orders  =  await Order.find();
    res.json( { orders } );
});

export default router;