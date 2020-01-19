const express = require ('express');

//Funkcja wywołująca routy z innych plików
const router = express.Router();

//Import naszego schematu
const Post = require('../models/Post');



//Odczyt posta
router.get('/', async (req,res) => {

     try{
        const posts = await Post.find();
        res.json(posts);
    
    } catch (err){
        res.json({message: err});
    }

});


//Post
router.post  ('/', async (req,res) =>{


    const post = new Post({
         title: req.body.title,
         description: req.body.description

     });

     try {
    const savePost = await post.save()
    res.json(savePost);
    
    } catch(err){

        res.json({message: err})
    }

});


router.get('/:postId', async (req,res) => {

    try{
    
    const post = await Post.findById(req.params.postId);
    res.json(post);
    } catch (err) {
        res.json({message: err});

    }

});


//Usunięcie posta
router.delete('/:postID', (req,res) => {
    try{
    const removePost = Post.remove({_id: req.params.postID})
    res.json(removedPost);

    }catch (err){
        res.json({messae: err})
    }

});


//Update posta

router.patch('/postID', (req,res) =>{
    try {
    const updatedPost = Post.updateOne (
        {_id: req.params.postID},
        {$set: {title: req.body.title}}
    );
        res.json(updatedPost);
    
    } catch (err){
        res.json({message: err});
    
    }

});



//Eksport routera
module.exports = router;