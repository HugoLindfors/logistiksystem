import Product from "../Models/ProductModel.js";
import Warehouse from "../Models/WarehouseModel.js";

async function CreateProduct( name, weight, price ) {

    let product  =  await Product.create({
        
        name,
        weight,
        price
    });

    console.log( `product ${ ( product )._id } was created...` );
    console.log( product );
};

async function ReadProduct( id ) {

    const warehouses = Warehouse.find();
    const products = Product.find();

    for ( let i = 0; i < ( await warehouses).length; i++ ) {

        for ( let j = 0; j < warehouses[i].products.length; j++ ) {

            if (warehouses[i].products[j].quantity <= 0) {

                Product.findOne( { _id: id }, { $set: { isInStock: false } } );
                console.log("Product isn't in store.");
            }

            else {

                Product.findOne( { _id: id }, { $set: { isInStock: true } } );
                break;
            }
        }
    }
};

async function UpdateProduct( id, name, weight, price ) {

    let product  =  await Product.updateOne( { _id: id }, { $set: {

        name,
        weight,
        price
    }});

    console.log( `product ${ ( product )._id } was updated...` );
    console.log( product );
};

async function DeleteProduct( id ) {

    await Product.deleteOne( { _id: id } );

    console.log( "product was deleted..." );
};

async function ProductScan( id ) {

    
};

export { 

    CreateProduct,
    ReadProduct,
    UpdateProduct,
    DeleteProduct
};