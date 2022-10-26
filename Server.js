import express from "express";
import mongoose from "mongoose";

const app = express();

// imports

import warehouseRouter from "./Routes/WarehouseRouter.js";
import productRouter from "./Routes/ProductRouter.js";
import employeeRouter from "./Routes/EmployeeRouter.js";
import orderRouter from "./Routes/OrderRouter.js";
import indexRouter from "./Routes/IndexRouter.js";
import employeeNameRouter from "./Routes/EmployeeNameRouter.js";
import { CreateOrder, UpdateOrder, DeleteOrder } from "./Controllers/OrderController.js";
import { CreateProduct, UpdateProduct, DeleteProduct, ProductScan } from "./Controllers/ProductController.js";

// app

// CreateOrder( "Anna Jonsson", "635926a6b7d48bf58b8d1c0e", "completed" );

// CreateProduct( "iPhone 14", "172g", "11 995 kr" );

app.set("view engine", "ejs");
app.use(express.json());
app.use("/", indexRouter);
app.use("/warehouses", warehouseRouter);
app.use("/products", productRouter);
app.use("/employees", employeeRouter);
app.use("/employee", employeeNameRouter);
app.use("/orders", orderRouter);

mongoose.connect("mongodb://localhost/LogisticsSystemDB");

app.listen(5050, () => {

    console.log("Server is up and running at http://localhost:5050");
});

ProductScan();