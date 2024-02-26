const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PORT;

//Sin esta linea esto no funcionaria cuando se suba a producción
const cors = require('cors');
const { productsGet } = require('./controllers/products.controllers');
const { dbConnection } = require('./database/config');

//Middelware's
app.use(cors());

//sin esta linea no se puede recibir datos JSON en los POST 
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('¡Hola, Express!');
// });

// app.get('/products', (req, res) => {
//   res.send('GET / Products');
// });

// app.post('/products', (req, res) => {
//   res.send('POST / Products');
// });

// app.put('/products', (req, res) => {
//   res.send('PUT / Products');
// });

// app.delete('/products', (req, res) => {
//   res.send('DELETE / Products');
// });
(async()=>{

//... queremos usar un await en el futuro
await dbConnection();
//carga de rutas

app.use(productsGet);
})();
app.listen(puerto, () => {
  console.log('Servidor escuchando en http://localhost:' + puerto);
});