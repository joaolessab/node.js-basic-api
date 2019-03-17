const mongoose = require('mongoose');

//Criando schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.Now
    }
});

//Registrando model
mongoose.model('Product', ProductSchema);