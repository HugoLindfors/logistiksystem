import express from "express";
import mongoose from "mongoose";
const app = express();

import warehouseRouter from "./routes/warehouses.js";
import productRouter from "./routes/products.js";
import employeeRouter from "./routes/employees.js";
import orderRouter from "./routes/orders.js";

app.set("view engine", "ejs");

app.use(express.json())
app.use("/warehouses", warehouseRouter)
app.use("/products", productRouter)
app.use("/employees", employeeRouter)
app.use("/orders", orderRouter)

mongoose.connect("mongodb://localhost/LogisticsSystemDB")

app.get("/", async (req, res) => {

    res.render("index")
});

app.listen(5050);