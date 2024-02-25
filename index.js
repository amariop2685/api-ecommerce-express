const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});

app.get('/products', (req, res) => {
  res.send('GET / Products');
});

app.post('/', (req, res) => {
  res.send('POST / Products');
});

app.put('/', (req, res) => {
  res.send('PUT / Products');
});

app.delete('/', (req, res) => {
  res.send('DELETE / Products');
});
app.listen(puerto, () => {
  console.log('Servidor escuchando en http://localhost:' + puerto);
});