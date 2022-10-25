import express from "express";
import mongoose from "mongoose";

const app = express();

import warehouseRouter from "./Routes/WarehouseRouter.js";
import productRouter from "./Routes/ProductRouter.js";
import employeeRouter from "./Routes/EmployeeRouter.js";
import orderRouter from "./Routes/OrderRouter.js";
import indexRouter from "./Routes/IndexRouter.js";
import ProductScan from "./Controllers/ProductController.js";

app.set("view engine", "ejs");
app.use(express.json());
app.use("/", indexRouter);
app.use("/warehouses", warehouseRouter);
app.use("/products", productRouter);
app.use("/employees", employeeRouter);
app.use("/orders", orderRouter);

mongoose.connect("mongodb://localhost/LogisticsSystemDB");

app.listen (5050, () => {
    console.log( "Server is up and running at http://localhost:5050" );
});

ProductScan();