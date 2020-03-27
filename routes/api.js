const express = require("express");
const router = express.Router();
const BlogPost = require('../model/blogPost');
// Routes Defined
router.get('/', (req,res) => {

    BlogPost.find({})
        .then((data) => {
            console.log('Data: ', data);

            res.json(data);// sends back json backend
        })
        
        .catch((error) => {
            console.log('Blog Post Get error: ', error);
            res.json(error);
        });
});

router.post('/save', (req, res)=> {

    const data = req.body;
    const newBlogPost = new BlogPost(data);

         console.log('Body: ',data);

        newBlogPost.save((error)=> {
            if (error) {
                res.status(500).json({msg: 'Sorry, Internal server Post error'});
                return;
            }
               return res.json({
                     msg: 'We recieved your data!!!!'
                 });
        });
    
    BlogPost

});
router.get('/name', (req,res)=>{
    const data = {
        username:'Jrich55',
        age: 30
    };
    res.json(data);

});



 module.exports= router;