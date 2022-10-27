import express from "express";
import Order from "../Models/OrderModel.js";
const router = express.Router();

router.get("/", async (req, res) => {

    const orders = await Order.find();
    res.json( { orders } );
});

router.get("/active", async (req, res) => {

    const orders = await Order.find( { status: "active" } );
    res.json( { orders } );
});

router.get("/oldest", async (req, res) => {

    const orders = await Order.find( { } );

    let orderDate;

    orders.forEach(o => {
        
        // console.log(o.createdAt);

        if (orderDate < o.createdAt) {

            orderDate = o.createdAt;
        }

        else if (orderDate > o.createdAt) {

        }

        else {

            orderDate = o.createdAt;
        }
    });

    console.log( orderDate );

    const order = await Order.findOne( { createdAt: orderDate });

    // console.log( order );

    res.json( { order } );

});

export default router;