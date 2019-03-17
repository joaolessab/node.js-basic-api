const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

//Criando sessão iniciando banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true }); //Talvez seja necessário remover esse parâmetro, dependendo da versão do mongoose

//Importanto módulos
requireDir('./models');

const Product = mongoose.model('Product');

//Criando primeira rota
app.get('/', (req, res) => {    
    Product.create({
        title: 'Reactive Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

    return res.send('Hello João');
});

//http://localhost:3001/
app.listen(3001);