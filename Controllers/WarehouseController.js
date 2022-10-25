import Warehouse from "../Models/WarehouseModel.js";

async function CreateWarehouse(name, productArray) {

    Warehouse.create({

        name,
        products: productArray
    })
};

async function UpdateWarehouse(id, name, productArrayStr) {

    Warehouse.updateOne({ _id: id }, {
        $set: {

            name,
            products: [JSON.parse(productArrayStr)]
        }
    });
};

async function DeleteWarehouse(id) {

    Warehouse.deleteOne({ _id: id });
};

async function AssignProductToWarehouse(warehouseId, productArray) {

    productArray.forEach(element => {

    });

    Warehouse.updateOne({

        _id: warehouseId
    },

        {
            $set: {


            }
        });
};

export {

    CreateWarehouse,
    UpdateWarehouse,
    DeleteWarehouse,
    AssignProductToWarehouse
};