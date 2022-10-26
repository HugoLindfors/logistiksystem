import Order from "../Models/OrderModel.js";

async function CreateOrder(name, productId, status) {

    let order = await Order.create({

        name,
        productId,
        status
    });

    console.log(`product ${(order)._id} was created...`);
    console.log(order);
};

async function UpdateOrder(id, productArrayStr) {

    let product = await Order.updateOne({ _id: id }, {

        $set: {

            products: [JSON.parse(productArrayStr)]
        }
    });

    console.log(`product ${product} was updated...`);
    console.log(product);
};

async function DeleteOrder(id) {

    Order.deleteOne({ _id: id });
};

export {

    CreateOrder,
    UpdateOrder,
    DeleteOrder
};