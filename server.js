import mongoose from "mongoose"
import Company from "./models/Company.js"

mongoose.connect("mongodb://localhost/LogisticsSystemDB");

createCompany()

async function createCompany() {

    try {

        const company = await Company.create({

            name: "Lagerbanken AB"
        })

        console.log(company)
    }
    catch (e) {
        console.log(e.message)
    }
}