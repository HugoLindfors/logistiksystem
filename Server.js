import express from "express";
import mongoose from "mongoose";

const app = express();

// imports

import warehouseRouter from "./Routes/WarehouseRouter";
import productRouter from "./Routes/ProductRouter";
import employeeRouter from "./Routes/EmployeeRouter";
import orderRouter from "./Routes/OrderRouter";
import indexRouter from "./Routes/IndexRouter";
import ProductScan from "./Controllers/ProductController";

// app

app.set("view engine", "ejs");
app.use(express.json());
app.use("/", indexRouter);
app.use("/warehouses", warehouseRouter);
app.use("/products", productRouter);
app.use("/employees", employeeRouter);
app.use("/orders", orderRouter);

mongoose.connect("mongodb://localhost/LogisticsSystemDB");

app.listen(5050, () => {
    console.log("Server is up and running at http://localhost:5050");
});

ProductScan();