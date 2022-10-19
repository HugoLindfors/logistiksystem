import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: { 

        type: String,
        required: true
    },

    inStore: {

        type: Number,
        required: true
    },

    isInStore: {

        type: Boolean,
        required: true
    },

    onShelf: {

        type: Number,
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

    warehouse: [{
        
        quantity: {

            type: Number,
            required: true
        },

        warehouse: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true
        }
    }]
});

export default mongoose.model("Product", productSchema);