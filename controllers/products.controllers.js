const {request, response} = require('express');
const Product = require('../models/Product.model');

const productsGet = async (req = request, res = response) => {

    const products = await Product.find();
    
    res.status(200).json({
        message: "datos listados correctamente",
        data: products
    });
}
const productsPost = async (req = request, res = response) => {
    
    const body = req.body;
    let product = Product(body); 
    await product.save();

    res.status(200).json({
        message: "agregados correctamente",
        data: body
    
});
}
const productsPut = async(req = request, res = response) => {
    const {id} = req.query;
    await Product.findByIdAndUpdate();
    const bodyUpdate = req.body
    let productUpdate = Product(bodyUpdate);
    await productUpdate.save();
    await Product.findByIdAndDelete(id);

    res.status(200).json({
        message: "Actualizado correctamente",
        data: bodyUpdate
    });
}
const productsDelete = async(req = request, res = response) => {
    const {id} =req.query;
    await Product.findByIdAndDelete(id);

    res.status(200).json({
        message: "Eliminado correctamente",
        data: id 
    })     
}


module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsDelete
}