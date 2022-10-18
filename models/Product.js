import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    inStore: Number,
    onShelf: Number,
    weight: Number,
    price: Number
});

export default mongoose.model("Product", productSchema);