import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

    name: String,
    quantity: Number,
    shelf: Number,
    weight: Number,
    price: Number
})

export default mongoose.model("Product", productSchema)