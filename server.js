import express from "express";
import mongoose from "mongoose";
import Product from "./models/Product.js";
const app = express();
import Warehouse from "./models/Warehouse.js"

app.set("view engine", "ejs");

app.use(express.json())

mongoose.connect("mongodb://localhost/LogisticsSystemDB")

app.get("/", async (req, res) => {
    
    const warehouses = await Warehouse.find();
    const products = await Product.find();
    res.json({ warehouses, products});

});


app.get("/warehouses", async (req, res) => {
    
    const warehouses = await Warehouse.find();
    res.json({ warehouses });

});

app.get("/products", async (req, res) => {
    
    const products = await Product.find();
    res.json({ products});

});

// assignProductToWarehouse()

async function assignProductToWarehouse() {

    try {
        const warehouse = await Warehouse.create ({
        
            name: "Köpenhamn",
            localName: "København",
            products: [await Product.findOne( { name: "Fazer Doris Tryffel 250g kakaokex med tryffelsmakande fyllning" }), await Product.findOne( { name: "Sunnuntai 1kg glutenfri mörk mjölmix" })]
        })
    }
    catch (e) {
        console.log(e.message);
    };
}

app.listen(5050);