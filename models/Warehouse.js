import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema({
    name: String,
    localName: String,
    products: [mongoose.SchemaTypes.ObjectId]
});

export default mongoose.model("Warehouse", warehouseSchema);