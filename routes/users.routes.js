const{Router} = require('express');
const { usersGet,usersPost,usersPut,usersDelete,loginPost } = require('../controllers/users.controllers');
const router = Router();
const guardToken = require('../middleware/auth.middleware');


router.get('/users', guardToken,  usersGet);

router.post('/users', guardToken,usersPost);

router.put('/users',guardToken, usersPut);

router.delete('/users', guardToken, usersDelete);

router.post('/login',guardToken, loginPost);

module.exports = router;