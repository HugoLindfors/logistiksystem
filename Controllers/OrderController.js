import Order from "../Models/OrderModel";

async function CreateOrder( productArrayStr ) {

    let order = await Order.create({

        products: [ JSON.parse( productArrayStr ) ]
    });

    console.log(`product ${ ( order )._id } was created...`);
    console.log(order);
};

async function UpdateOrder( id, productArrayStr ) {

    let product = await Order.updateOne({ _id: id }, {
        
        $set: {

            products: [ JSON.parse( productArrayStr ) ]
        }
    });

    console.log( `product ${ ( product )._id } was updated...` );
    console.log( product );
};

async function DeleteOrder( id ) {

    Warehouse.deleteOne( { _id: id } );
};

export {

    CreateOrder,
    UpdateOrder,
    DeleteOrder
};