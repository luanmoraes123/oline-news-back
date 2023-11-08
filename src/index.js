const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const bcrypt = require('bcrypt');
const newsModel = require('./module/news/newsModel');
const userModel = require('./module/user/UserModel');
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {
  const users = await userModel.find({});

  return res.status(200).json(users);
});

app.post('/login', async (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: 'O campo email é obrigatorio' });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: 'O campo senha é obrigatorio' });
  }

  const userExists = await userModel.findOne({ email: req.body.email });

  if (!userExists) {
    return res.status(400).json({ mensage: 'O usuario não esta cadastrado' });
  }

  const senhaVerificada = bcrypt.compareSync(req.body.password, userExists.password);

  if (!senhaVerificada) {
    return res.status(400).json({ mensage: 'Usuario ou senha invalidos' });
  }

  const token = jwt.sign({ _id: userExists._id }, process.env.JWT);


  return res.status(200).json({ mensage: "login efetuado com sucesso", token: token });

})


app.post('/users', async (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: 'O campo email é obrigatorio' });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: 'O campo senha é obrigatorio' });
  }
  if (!req.body.name) {
    return res.status(400).json({ message: 'O campo nome é obrigatorio' });
  }

  const userExists = await userModel.findOne({ email: req.body.email });

  if (userExists) {
    return res.status(400).json({ mensage: 'O usuario ja existe' });
  }

  const senhaHash = bcrypt.hashSync(req.body.password, 10);

  const user = await userModel.create({
    email: req.body.email,
    name: req.body.name,
    password: senhaHash
  });

  return res.status(201).json(user);
})
app.get('/news', async (req, res) => {
  let filtroCategorias = {};
  if (req.query.categoria) {
    filtroCategoria = { categoria: req.query.categoria }
  }
  const news = await newsModel.find(filtroCategorias);
  return res.status(200).json(news);
})
app.post('/news', async (req, res) => {
  const noticia = req.body;
  if (noticia) {
    const noticiaCriada = await newsModel.create(req.body)
    return res.status(201).json(noticiaCriada);
  }
  return res.status(400).json({ mensage: "error ao criar noticia" });
})

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
})