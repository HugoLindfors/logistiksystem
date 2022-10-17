import mongoose from "mongoose"

const storageSchema = new mongoose.Schema({

    name: String,
})

export default mongoose.model("Storage", storageSchema)