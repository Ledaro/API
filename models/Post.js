const mongoose = require('mongoose');

//Schemat/wzór naszego zapytania
const PostSchema = mongoose.Schema({

    TytułKsiążki: {
        type: String,
        required: true
},

    OpisKsiążki: {
        type: String,
        required: true
},
    
     AutorKsiążki: {
            type: String,
            required: true
},

    DataWydania: {
    
        type: Date,
        
}

});

//Eksport na serwer
module.exports = mongoose.model('Posts', PostSchema);
