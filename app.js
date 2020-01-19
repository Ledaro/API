const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Routes

app.get('/', (req,res) => {

    res.send('We are on home');

});

app.get('/posts', (req,res) => {

    res.send('We are on post');

});


  
//Connect to db

// mongoose.connect('mongodb+srv://Sklep:kaka22@sklepwsb-sionk.mongodb.net/test?retryWrites=true&w=majority', () 
// => console.log("connected to db!"))



//how do we start litening server
app.listen(3000);