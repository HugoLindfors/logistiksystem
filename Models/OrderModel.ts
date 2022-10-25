import mongoose from "mongoose";

const ORDER_SCHEMA = new mongoose.Schema({

    name: {

        type: String,
        required: true,
    },

    products: [mongoose.SchemaTypes.ObjectId],

    status: {

        type: String,
    }

});

export default mongoose.model("Order", ORDER_SCHEMA);

/// orders   ->   order   ->   name
///                       -> [ product 1, product 2, product 3, ... ]
///                       ->   status