import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema ({

    name: {

        type: String,
        required: true
    },

    products: [{ 

        productId: mongoose.SchemaTypes.ObjectId,
        quantity: Number
    }],
});

export default mongoose.model("Warehouse", warehouseSchema);