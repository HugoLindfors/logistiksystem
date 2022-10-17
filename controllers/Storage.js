import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/LogisticsSystemDB");

import Storage from "../models/Storage.js";

async function CreateStorageLocation(name) {
    try {
        Storage.create({
            name: name
        })
    }
    catch {
        console.log("Där bidde det fel")
    }
}