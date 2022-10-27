import express from "express";
import Product from "../Models/ProductModel.js";
const router = express.Router();

router.get("/", async (req, res) => {

    const products = await Product.find();
    res.json( { products } );

});

router.get("/out_of_stock", async (req, res) => {

    const products = await Product.find( { isInStock: false } );
    res.json( { products } );
});

export default router;