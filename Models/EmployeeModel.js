import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true
    },

    sex: {

        type: String,
        required: true,
        lowercase: true
    },
    
    age: {

        type: Number,
        required: true
    },

    schedule: {

        type: String,
        required: true
    },

    role: {

        type: String,
        required: true,
        lowercase: true
    },
});

export default mongoose.model("Employee", employeeSchema);