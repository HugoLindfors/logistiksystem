import mongoose from "mongoose";

const ORDER_SCHEMA = new mongoose.Schema({

    name: {

        type: String,
        required: true,
    },

    productId: String,

    status: {

        type: String,
    },

    createdAt: {

        type: Date,
        required: true,
        default: Date.now()
    }

});

export default mongoose.model("Order", ORDER_SCHEMA);

/// orders   ->   order   ->   name
///                       -> [ product 1, product 2, product 3, ... ]
///                       ->   status