import express from "express";
import mongoose from "mongoose";
import Product from "./models/Product.js";
const app = express();
import Warehouse from "./models/Warehouse.js"

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/LogisticsSystemDB")

// async function createWarehouse() { // skapa lagerlokal

//     try {
//         const warehouse = await Warehouse.create({
//             name: < NAMN HÄR >
//         })
//         console.log(warehouse);
//     }
//     catch (e) {
//         console.log(e.message);
//     }
// }

// createProduct()

// async function createProduct() { // skapa produkt

//     try {
//         const product = await Product.create({
//             name: "Flux Munskölj",
//             inStore: 76,
//             onShelf: 37,
//             weight: 250,
//             price: 250,
//         })
//         console.log(product);
//     }
//     catch (e) {
//         console.log(e.message);
//     }
// }

app.get("/", async (req, res) => {
    
    const warehouses = await Warehouse.find();
    const products = await Product.find();
    res.render("index", { warehouses, products });
});

app.listen(5050);