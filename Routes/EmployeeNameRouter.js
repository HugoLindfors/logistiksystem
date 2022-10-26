import express from "express";
import Employee from "../Models/EmployeeModel.js";
const router = express.Router();

router.get("/:username", (req, res) => {

    Employee.findOne( { username: req.params.username } )

        .then( ( data ) => {
            
            if (data) {

                res.status(200).json(data);
            }

            else {

                res.status(400).send("Error! 400, Bad Request!")
            }
        })
});

export default router;