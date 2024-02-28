const {request, response} = require('express');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const salt = 10;

const usersGet = async (req = request, res = response) => {

    const users = await User.find();
    
    res.status(200).json({
        message: "datos listados correctamente",
        data: users
    });
}
const usersPost = async (req = request, res = response) => {
    
    const body = req.body;
    let user = User(body);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.status(200).json({
        message: "agregados correctamente",
        data: body
    
});
}
const usersPut = async(req = request, res = response) => {
    const {id} = req.query;
    const bodyUpdate = req.body
    const updateUser = await User.findByIdAndUpdate(id, bodyUpdate,{new:true});

    res.status(200).json({
        message: "Actualizado correctamente",
        data: updateUser
    });
}
const usersDelete = async(req = request, res = response) => {
    const {id} =req.query;
    await User.findByIdAndDelete(id);

    res.status(200).json({
        message: "Eliminado correctamente",
        data: id 
    })     
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}