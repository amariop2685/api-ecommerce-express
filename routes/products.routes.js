const{Router} = require('express');
const { productsGet,productsPost,productsPut,productsDelete } = require('../controllers/products.controllers');
const router = Router();
const guardToken = require('../middleware/auth.middleware');



router.get('/products',productsGet);

router.post('/products', guardToken, productsPost);

router.put('/products', guardToken,productsPut);

router.delete('/products',guardToken, productsDelete);


module.exports = router;