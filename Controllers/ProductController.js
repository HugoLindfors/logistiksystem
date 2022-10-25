import Product from "../Models/ProductModel.js";
import Warehouse from "../Models/WarehouseModel.js";

async function CreateProduct( name, weight, price ) {

    let product  =  await Product.create({

        name,
        weight,
        price,
    });

    console.log(`product ${ product._id } was created...` );
    console.log( product );
};

async function UpdateProduct( id, name, weight, price ) {

    let product  =  await Product.updateOne({ _id: id }, {
        
        $set: {

            name,
            weight,
            price,
        }
    });

    console.log( `product ${ product._id } was updated...` );
    console.log( product );
};

async function DeleteProduct( id ) {

    await Product.deleteOne({ _id: id });

    console.log( "product was deleted..." );
};

async function ProductScan() {

    let warehouses  =  await Warehouse.find();
    let produkts  =  await Product.find();

    for ( let i  =  0;  i  <  warehouses.length;  i++ ) {

        let warehouse  =  warehouses[i];

        for ( let j  =  0;  j   <   warehouse.products.length;   j++ ) {

            for ( let k  =  0;   k   <   produkts.length;   k++ ) {

                let produkt  =  produkts[k];

                let product  =  warehouse.products[j];

                if ( product.quantity   <   0 ) {

                    await Product.updateOne({ _id: produkt._id }, { $set: { isInStore: true } });
                }

                else {

                    await Product.updateOne({ _id: produkt._id }, { $set: { isInStore: false } });
                };
            };
        };
    };
};

export {

    CreateProduct,
    UpdateProduct,
    DeleteProduct,
    ProductScan
};