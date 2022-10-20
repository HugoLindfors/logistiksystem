import express from "express";
import mongoose from "mongoose";

const app = express();

import warehouseRouter from "./Routes/WarehouseRouter.js";
import productRouter from "./Routes/ProductRouter.js";
import employeeRouter from "./Routes/EmployeeRouter.js";
import orderRouter from "./Routes/OrderRouter.js";
import checkIfInStore from "./Controllers/checkIfInStore.js"

checkIfInStore();


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

app.listen(5050, () => {
    console.log("Click this: http://localhost:5050}")
});