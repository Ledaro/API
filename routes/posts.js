const express = require ('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req,res) => {

    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (err){
        res.json({message: err});
    }

});

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

router.get('/:postID', async (req,res) => {

    try{
    
    const post = await Post.findById(req.params.postID);
    res.json(post);
    } catch (err) {
        res.json({message: err});

    }

});



router.delete('/:postID', (req,res) => {
    try{
    const removePost = Post.remove({_id: req.params.postID})
    res.json(removedPost);

    }catch (err){
        res.json({messae: err})
    }

});


//Update post

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


module.exports = router;