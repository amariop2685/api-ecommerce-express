const {request, response} = require('express');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    const id = req.query;
    const userToEdit = req.body;

    if (userToEdit.password != null && userToEdit.password != "") {
        // hacer lo necesario....CORRRECTO
        userToEdit.password = await bcrypt.hash(userToEdit.password, salt);
    } else {
        delete userToEdit.password;
    }

    const updatedUser = await User.findByIdAndUpdate(id, userToEdit, { new: true });


    res.status(200).json({
        message: "Usuario actualizado",
        data: updatedUser,
        id: id,
        userToEdit: userToEdit
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

const loginPost = async (req = request, res = response) => {
    const body = req.body;
    const userInformationDb = await User.findOne({email: body.email, active: true});
if(userInformationDb == null){
    res.status(400).json({
        message: "User not found or User not active",
        data: null
    }); 
}

    const comparePswrd = await bcrypt.compare(body.password, userInformationDb.password);
    if (comparePswrd == false){
        res.status(400).json({
            message: "logeo Incorrecto",
            data: null
        });}else{
        
        const payload = {
            full_name: `${userInformationDb.name} ${userInformationDb.last_name}`
          
        };
            res.status(200).json({
                message: "logeo Correcto",
                data: jwt.sign(payload,process.env.JWT_SIGNATURE)
        });
    }
}




module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    loginPost
}