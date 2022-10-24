import express from "express";
import mongoose from "mongoose";

const app = express();

import warehouseRouter from "./Routes/WarehouseRouter.js";
import productRouter from "./Routes/ProductRouter.js";
import employeeRouter from "./Routes/EmployeeRouter.js";
import orderRouter from "./Routes/OrderRouter.js";
import { CreateProduct, UpdateProduct, DeleteProduct, ProductScan } from "./Controllers/ProductController.js"; // C. R. U. D.
import { CreateEmployee, ReadEmployee, UpdateEmployee, DeleteEmployee } from "./Controllers/EmployeeController.js";
import WarehouseController from "./controllers/WarehouseController.js";
import Warehouse from "./Models/WarehouseModel.js"

app.set(

    "view engine", 
    "ejs" 
);

app.use( 

    express.json() 
);

app.use(

    "/warehouses", 
    warehouseRouter 
);

app.use(

    "/products", 
    productRouter 
);

app.use(

    "/employees", 
    employeeRouter 
);

app.use(

    "/orders", 
    orderRouter 
);

mongoose.connect( "mongodb://localhost/LogisticsSystemDB" );

app.get( "/", async ( req, res ) => {

    res.render( "index" );
});

app.listen( 5050, () => {
    console.log( "Click this: http://localhost:5050}" );
});

// CreateProduct( "Potatisgratäng 800g", 800, 500, false );

// AssignProductToWarehouse();

ProductScan("634e935c7378815d9679b660");

async function AssignProductToWarehouse() {

    await Warehouse.updateOne({

        name: "Karlstad"
    },
    
    { 
        $set: {

            products: [{

                productId: "63567c4e4871daa2be87df63",
                quantity: 7
            }]
        }
    })
}