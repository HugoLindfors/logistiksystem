import mongoose from "mongoose";

const PRODUCT_SCHEMA  =  new mongoose.Schema({

    name : { 

        type : String,
        required : true
    },

    weight : {

        type : Number,
        required : true
    },

    price : {

        type : Number,
        required : true
    },

    isInStock: {

        type : Boolean,
        required : false,
    }
});

export default mongoose.model ( "Product", PRODUCT_SCHEMA );

/// products   ->   product   ->   name
///                           ->   weight
///                           ->   price
///                           ->   is in stock?