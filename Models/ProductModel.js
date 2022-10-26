import mongoose from "mongoose";

const PRODUCT_SCHEMA = new mongoose.Schema({

    name: {

        type: String,
        required: true
    },

    weight: {

        type: String,
        required: true
    },

    price: {

        type: String,
        required: true
    },

    isInStock: {

        type: Boolean,
        required: false,
    }
});

export default mongoose.model("Product", PRODUCT_SCHEMA);

/// products   ->   product   ->   name
///                           ->   weight
///                           ->   price
///                           ->   is in stock?