import mongoose from "mongoose";

const WAREHOUSE_SCHEMA  =  new mongoose.Schema ({

    name : {

        type : String,
        required : true,
        lowercase : false,
    },

    products: [ { 

        productId : mongoose.SchemaTypes.ObjectId,
        quantity : Number,
    } ],
} );

export default mongoose.model( "Warehouse", WAREHOUSE_SCHEMA );

/// warehouses   ->   warehouse   ->   name
///                               ->   products   ->   product   ->   product id
///                                                              ->   quantity