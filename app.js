const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());


 //import routes
 const postsRoute = require ('./routes/posts');

app.use('/posts', postsRoute);


//Routes

app.get('/', (req,res) => {

    res.send('We are on home');

});




  
//Connect to db
mongoose.connect(
 process.env.DB_CONNECTION,
 {useNewUrlParser: true}, () => 
console.log("connected to db!")
);



//how do we start litening server
app.listen(3000);
