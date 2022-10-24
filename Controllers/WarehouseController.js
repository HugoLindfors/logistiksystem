import Warehouse from "../Models/WarehouseModel.js";

async function CreateWarehouse( name, productArray ) {

    Warehouse.create({
        
        name,
        products: productArray
    })
};

async function UpdateWarehouse( id, name, weight, price ) {

    Warehouse.updateOne( { _id: id }, { $set: {

        name,
        weight,
        price
    }});
};

async function DeleteWarehouse( id ) {

    Warehouse.deleteOne( { _id: id } );
};

async function AssignProductToWarehouse( warehouseId, productArray ) {

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

export default { CreateWarehouse, UpdateWarehouse, DeleteWarehouse, AssignProductToWarehouse };