import mongoose from "mongoose";

const EMPLOYEE_SCHEMA = new mongoose.Schema({

    name: {

        type: String,
        required: true,
        lowercase: false,

    },

    sex: { /// allthough commonly dismissed as political correctness or wokeness, scientifically, biological sex is different from gender

        type: String,
        required: true,
        lowercase: true,

    },

    age: {

        type: Number,
        required: true,
        lowercase: false,

    },

    weekday: {

        type: String,
        required: true,
        lowercase: false,

    },

    role: { /// roles like driver, picker and eventual future additions

        type: String,
        required: true,
        lowercase: true,

    },
});

export default mongoose.model("Employee", EMPLOYEE_SCHEMA);

/// employees   ->   employee   ->   name
///                             ->   sex
///                             ->   age
///                             ->   schedule   ->   working days   ->   working day   ->   working hours
///                             ->   role