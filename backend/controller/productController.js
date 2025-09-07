import products from "../model/products.js";


export const allProducts = async (req, res) => {
    try{
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(400).json(error.message);
    }
};

