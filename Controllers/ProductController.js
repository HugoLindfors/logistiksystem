import Product from "../Models/ProductModel.js";
import Warehouse from "../Models/WarehouseModel.js";

async function CreateProduct(name, weight, price) {

    Product.create({
        
        name,
        weight,
        price
    })
};

async function UpdateProduct(id, name, weight, price) {

    Product.updateOne( {_id: id}, { $set: {

        name,
        weight,
        price
    }});
};

async function DeleteProduct(id) {

    Product.deleteOne( {_id: id} );
};

async function ProductScan(id) {

    const warehouses = Warehouse.find();
    const products = Product.find();

    for ( i = 0; i < (await warehouses).length; i++) {

        for ( j = 0; j < warehouses[i].products.length; j++ ) {

            if (warehouses[i].products[j].product !== 0) {

                
            }
        }
    }
};

export default { CreateProduct, UpdateProduct, DeleteProduct, ProductScan }