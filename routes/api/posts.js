const express = require('express');
const router = express.Router();


//@router GET api/posts/test 
//@desc Just to check the posts route
//@access PUBLIC
router.get('/test', (req,res)=>{res.json({
    msg: "posts works"
})})

module.exports = router;