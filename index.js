const express = require('express');
const { formPage, listaPage } = require('./views');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const feedbacks = [];

app.get('/', (req, res) => {
  res.send(formPage());
});

app.post('/feedbacks/enviar', (req, res) => {
  const { nome, comentario } = req.body;
  feedbacks.push({ nome, comentario });
  res.redirect('/feedbacks/lista');
});

app.get('/feedbacks/lista', (req, res) => {
  res.send(listaPage(feedbacks));
});

app.post('/feedbacks/remover', (req, res) => {
  const indice = parseInt(req.body.indice, 10);
  feedbacks.splice(indice, 1);
  res.redirect('/feedbacks/lista');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
