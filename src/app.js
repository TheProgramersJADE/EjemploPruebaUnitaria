const express = require('express');
const { suma, restar, multiplicar, dividir } = require('./operaciones');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Proyecto funcionando');
});

app.get('/suma/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: suma(Number(a), Number(b)) });
});

app.get('/restar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: restar(Number(a), Number(b)) });
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: multiplicar(Number(a), Number(b)) });
});

app.get('/dividir/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: dividir(Number(a), Number(b)) });
});

module.exports = app;
