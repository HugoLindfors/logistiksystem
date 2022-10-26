import express from "express";
import Employee from "../Models/EmployeeModel.js";
const router = express.Router();

router.get("/", async (req, res) => {

    const employees = await Employee.find();
    res.json( { employees } );
});

router.get("/on/:weekday", async (req, res) => {

    const currentWeekday = req.params.weekday.toLowerCase();
    
    const employees = await Employee.find();

    const sortedEmployees = employees.filter(employee => {

        switch(currentWeekday) {

            case "sunday":

                if (employee.schedule.sunday.isWorking) {

                    return true;
                };

            case "monday":

                if (employee.schedule.monday.isWorking) {

                    return true;
                };

            case "tuesday":

                if (employee.schedule.tuesday.isWorking) {

                    return true;
                };

            case "wednesday":

                if (employee.schedule.wednesday.isWorking) {

                    return true;
                };

            case "thursday":

                if (employee.schedule.thursday.isWorking) {

                    return true;
                };

            case "friday":

                if (employee.schedule.friday.isWorking) {

                    return true;
                };

            case "saturday":

                if (employee.schedule.saturday.isWorking) {

                    return true;
                };

            default:
                console.log("incorrect path");
        }
    });

    res.json( { sortedEmployees } );
});

export default router;