import express from "express";
import mongoose from "mongoose";

const app = express();

import warehouseRouter from "./Routes/WarehouseRouter.js";
import productRouter from "./Routes/ProductRouter.js";
import employeeRouter from "./Routes/EmployeeRouter.js";
import orderRouter from "./Routes/OrderRouter.js";
import { CreateProduct, ReadProduct, UpdateProduct, DeleteProduct } from "./Controllers/ProductController.js"; // C. R. U. D.
import { CreateEmployee, ReadEmployee, UpdateEmployee, DeleteEmployee } from "./Controllers/EmployeeController.js";

app.set( "view engine", "ejs" );

app.use( express.json() );
app.use( "/warehouses", warehouseRouter );
app.use( "/products", productRouter );
app.use( "/employees", employeeRouter );
app.use( "/orders", orderRouter );

mongoose.connect( "mongodb://localhost/LogisticsSystemDB" );

app.get( "/", async ( req, res ) => {

    res.render( "index" );
});

app.listen( 5050, () => {
    console.log("Click this: http://localhost:5050}");
});

// UpdateEmployee( "63566c1df3ac803f7c5602b3", "Kim Lee Park", "man", 35, ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"], "plockare" );