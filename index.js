const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PORT;

//Sin esta linea esto no funcionaria cuando se suba a producción
const cors = require('cors');
const productRoutes = require('./routes/products.routes');
const { dbConnection } = require('./database/config');

//Middelware's
app.use(cors());

//sin esta linea no se puede recibir datos JSON en los POST 
app.use(express.json());

(async()=>{

//... queremos usar un await en el futuro
    await dbConnection();
    //carga de rutas

    app.use(productRoutes);
    
})();

app.listen(puerto, () => {
  console.log('Servidor escuchando en http://localhost:' + puerto);
});