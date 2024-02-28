const{Router} = require('express');
const { usersGet,usersPost,usersPut,usersDelete,loginPost } = require('../controllers/users.controllers');
const router = Router();


router.get('/users', usersGet);

router.post('/users', usersPost);

router.put('/users', usersPut);

router.delete('/users', usersDelete);

router.post('/login', loginPost);

module.exports = router;