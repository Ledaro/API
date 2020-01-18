const express = require('express');

const app = express();

//routes

app.get('/', (req,res) => {

    res.send('We are on home');

});

app.get('/posts', (req,res) => {

    res.send('We are on post');

});


//how do we start litening server
app.listen(3000);