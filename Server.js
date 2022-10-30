const HOST = "localhost";
const PORT = 5050;
const DB = "LogisticsSystemDB"

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

app.set("view engine", "ejs");
app.use(express.json());
app.use("/", indexRouter);
app.use("/warehouses", warehouseRouter);
app.use("/products", productRouter);
app.use("/employees", employeeRouter);
app.use("/employee", employeeNameRouter);
app.use("/orders", orderRouter);

mongoose.connect(`mongodb://${HOST}/${DB}`);

app.listen(PORT, () => {

    console.log(`Server is up and running at http://${HOST}:${PORT}`);
});

ProductScan();

// CreateProduct("Herkkumaa gurksallad 430g", "430g", "59 kr");
// CreateProduct("Sisu Tuima Kakkipussi konfektyrblanding 250g", "250g", "59 kr");
// CreateProduct("Panda Juhlapöydän chokladkonfekt 300g", "300g", "88 kr");
// CreateProduct("Karl Fazer vit choklad & mjölkchokladkaka 131g", "131g", "44 kr");