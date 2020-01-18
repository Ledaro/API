const express = require('express');

const app = express();


//Middlewares

app.use('/posts', () => {

    console.log("This is middleware running");
});



//Routes

app.get('/', (req,res) => {

    res.send('We are on home');

});

app.get('/posts', (req,res) => {

    res.send('We are on post');

});


//how do we start litening server
app.listen(3000);