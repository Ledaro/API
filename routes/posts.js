const express = require ('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res) => {

    res.send('We are on post');

});


router.get('/specific', (req,res) => {

    res.send('We are on specific post');

});


module.exports = router;