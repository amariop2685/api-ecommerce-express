const {request, response} = require('express');
const Product = require('../models/Product.model');
const ProductModel = require('../models/Product.model');

const productsGet = async (req = request, res = response) => {

    const products = await Product.find();
    
    res.status(200).json({
        message: "datos listados correctamente",
        data: products
    });
}
const productsPost = (req = request, res = response) => {
    const body = req.body;
    res.status(200).json({
        message: "datos agregados correctamente",
        data: body
    
});
}
const productsPut = (req = request, res = response) => {
    res.send('PUT /products');
}
const productsDelete = (req = request, res = response) => {
    res.send('DELETE /products');       
}


module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsDelete
}