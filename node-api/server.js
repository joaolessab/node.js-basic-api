const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();

//Criando sessão iniciando banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true }); //Talvez seja necessário remover esse parâmetro, dependendo da versão do mongoose

//Criando primeira rota
app.get('/', (req, res) => {
    res.send('Hello João');
});

//http://localhost:3001/
app.listen(3001);