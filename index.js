const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json([]);
})
app.post('/users', (req, res) => {
  res.status(201).json([]);
})
app.get('/news', (req, res) => {
  res.status(200).json([]);
})
app.post('/news', (req, res) => {
  res.status(201).json([]);
})

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
})