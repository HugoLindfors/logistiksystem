import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema({
    name: String
});

export default mongoose.model("Warehouse", warehouseSchema);