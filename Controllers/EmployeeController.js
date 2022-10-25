import Employee from "../Models/EmployeeModel.js";

async function CreateEmployee(name, sex, age, weekday, role) { // weekdayArrayStr  =  '["Monday", "Tuesday", "Wednesday", ...]'

    if (role == null) return;

    let employee = await Employee.create({

        name,
        sex,
        age,
        weekday,
        role
    });

    console.log(`Employee ${(Employee).name} was created...`);
    console.log(employee);
};

async function UpdateEmployee(id, name, sex, age, weekday, role) {

    let employee = await Employee.updateOne({ _id: id }, {
        $set: {

            name,
            sex,
            age,
            weekday,
            role
        }
    });

    console.log(`Employee was updated...`);
    console.log(employee);
};

async function DeleteEmployee(id) {
    await Employee.deleteOne({ _id: id });
    console.log("Employee was deleted...");
};

export {
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee
};