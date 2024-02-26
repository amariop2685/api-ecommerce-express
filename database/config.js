const mongoose = require('mongoose');

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Conexión correcta de la BD");
    }catch (error){
            console.log(error);
            throw new Error('Error al conectar con la base de datos');
    }
}

module.exports={
    dbConnection
}