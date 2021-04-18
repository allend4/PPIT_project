import express from 'express';
import Product from '../models/productModel';
import { getToken } from '../util';

const router = express.Router();

//get list of products to the user
router.get("/", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});
//api to create product object
router.post("/", async(req, res) =>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        inStockCounter: req.body.inStockCounter,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });
    //call save and check if product exist and save if not then error display
    const newProduct = await product.save();
    if (newProduct){
        return res.status(201).send({message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({message:' Error in Creating Product. ' })
})
export default router;