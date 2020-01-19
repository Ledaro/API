
//Import pakietu express, służy do tworzenia routów
const express = require('express');

//Rozpoczęcie pracy pakietu
const app = express();

//Import pakietu mongoose,, służy do połączenia się z bazą danych
const mongoose = require('mongoose');

//Import pakietu body-parser, przetwarza posta
const bodyParser = require('body-parser');

//Linia kodu wymagana,aby obługiwać pliki .env
require('dotenv/config');


//Użycie pakietu body-parser
app.use(bodyParser.json());


 //Import routów z folderu routes/posts
 const postsRoute = require ('./routes/posts');

 //Dzięki tej linijce nie musimy w kazdym routcie zaznaczac app.get '/posts',
 //bo dziekitej linijce,będzie działo się to automatycznie 
 app.use('/posts', postsRoute);


//Routes

app.get('/', (req,res) => {

    res.send('Jesteś na stronie głównej');

});

//Łączenie się z bazą danych
//process.env.DB_CONNECTION - odnosi się do osobnego pliku.env, gdzie znajudje się link do łączenia
//z bazą danych

mongoose.connect(
 process.env.DB_CONNECTION,
 {useNewUrlParser: true}, () => 
console.log("Połączono z bazą danych!")
);

//Nasłuchiwanie serwera; port 3000
app.listen(3000);
