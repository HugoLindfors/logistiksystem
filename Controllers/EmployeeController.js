import Employee from "../Models/EmployeeModel.js";

async function CreateEmployee(firstName, lastName, sex, age, role) { // weekdayArrayStr  =  '["Monday", "Tuesday", "Wednesday", ...]'

    await Employee.create({

        firstName,
        lastName,
        username: `${firstName}.${lastName}`.toLocaleLowerCase(),
        sex,
        age,
        role
    });
};

async function UpdateEmployee(id, firstName, lastName, sex, age, role) {

    await Employee.updateOne({ _id: id }, {
        $set: {

            firstName,
            lastName,
            username: `${firstName}.${lastName}`.toLocaleLowerCase(),
            sex,
            age,
            role
        }
    });

    console.log(`Employee was updated...`);
    console.log(employee);
};

async function DeleteEmployee(id) {

    await Employee.deleteOne({ _id: id });
};

export { CreateEmployee, UpdateEmployee, DeleteEmployee };