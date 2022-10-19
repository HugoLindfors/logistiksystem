import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: [ mongoose.SchemaTypes.ObjectId ]
});

export default mongoose.model("Order", orderSchema);