const {request, response} = require('express');
const Product = require('../models/Product.model');

const productsGet = (req = request, res = response) => {
    res.send('Prueba funcional');
}
const productsPost = (req = request, res = response) => {
    res.send('POST /products');
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