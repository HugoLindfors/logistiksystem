import Product from "../Models/ProductModel.js";
import Warehouse from "../Models/WarehouseModel.js";

async function checkIfInStore() {

    const warehouses = await Warehouse.find();

    for (let i = 0; i < warehouses.length; i++) {

        for (let j = 0; j < warehouses[i].products.length; j++) {

            try {

                const product = await Product.findOne( { _id: `${warehouses[i].products[j].product}`});
                console.log(product)

                if (warehouses[i].products[j].quantity === 0) {

                    await Product.updateOne( { _id: `${warehouses[i].products[j].product}`}, { $set: { isInStore: false}});
                }

            else {
                
                await Product.updateOne( { _id: `${warehouses[i].products[j].product}` }, { $set: { isInStore: true}});
            }
            }

            catch (e) {
                console.log("ERROR: " + e.message);
            };
        };
    };

    const products = await Product.find();

    for (let k = 0; k < products.length; k++) {

        if (products[k].isInStore === false) {

            console.log(`${products[k].name} isn't in store`)
        }
    }
};

export default checkIfInStore;