import Employee from "../Models/EmployeeModel.js";

async function CreateEmployee(firstName, lastName, sex, age, role) {

    await Employee.create({

        firstName,
        lastName,
        username: `${firstName.replace(" ", "")}.${lastName.replace(" ", "")}`.toLocaleLowerCase(),
        sex,
        age,
        role,
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
};

async function DeleteEmployee(id) {

    await Employee.deleteOne({ _id: id });
};

async function AssignWeekdays(id, sunday, monday, tuesday, wednesday, thursday, friday, saturday) {

    await Employee.updateOne({ _id: id }, {

        $set: {

            schedule: {

                sunday: {

                    isWorking: sunday
                },

                monday: {

                    isWorking: monday
                },

                tuesday: {

                    isWorking: tuesday
                },

                wednesday: {

                    isWorking: wednesday
                },

                thursday: {

                    isWorking: thursday
                },

                friday: {

                    isWorking: friday
                },

                saturday: {

                    isWorking: saturday
                },
            }
        }
    });
};

export { CreateEmployee, UpdateEmployee, DeleteEmployee, AssignWeekdays };