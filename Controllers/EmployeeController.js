import Employee from "../Models/EmployeeModel.js";

async function CreateEmployee( name, sex, age, weekdayArrayStr, role  ) { // weekdayArrayStr  =  '["Monday", "Tuesday", "Wednesday", ...]'

    if ( role  ==  null ) return;

    console.log(weekdayArrayStr);

    let employee  =  await Employee.create({
        
        name,
        sex,
        age,
        weekdays: [JSON.parse(weekdayArrayStr)],
        role
    });

    console.log( `Employee ${ ( Employee )._id } was created...` );
    console.log( employee );
};

async function ReadEmployee( id ) {

    const employees = Employee.find();

    for ( let i = 0; i < ( await warehouses).length; i++ ) {

        for ( let j = 0; j < warehouses[i].Employees.length; j++ ) {

            if (warehouses[i].Employees[j].quantity <= 0) {

                Employee.findOne( { _id: id }, { $set: { isInStock: false } } );
                console.log("Employee isn't in store.");
            }

            else {

                Employee.findOne( { _id: id }, { $set: { isInStock: true } } );
                break;
            }
        }
    }
};

async function UpdateEmployee( id, name, sex, age, weekdayArrayStr, role ) {

    if ( role  ==  null ) return;

    console.log(weekdayArrayStr);

    let employee  =  await Employee.updateOne( { _id: id }, { $set: {

        name,
        sex,
        age,
        weekdays: JSON.parse(weekdayArrayStr),
        role
    }});

    console.log( `Employee ${ ( employee )._id } was updated...` );
    console.log( employee );
};

async function DeleteEmployee( id ) {

    await Employee.deleteOne( { _id: id } );

    console.log( "Employee was deleted..." );
};

export { 

    CreateEmployee,
    ReadEmployee,
    UpdateEmployee,
    DeleteEmployee
};