import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: { 

        type: String,
        required: true
    },

    weight: {

        type: Number,
        required: true
    },

    price: {

        type: Number,
        required: true
    },

    isInStock: {

        type: Boolean,
        required: false
    }
});

export default mongoose.model("Product", productSchema);