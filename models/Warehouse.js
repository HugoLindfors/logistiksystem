import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema ({

    name: {

        type: String,
        required: true
    },

    localName: {

        type: String,
        required: false
    },
});

export default mongoose.model("Warehouse", warehouseSchema);