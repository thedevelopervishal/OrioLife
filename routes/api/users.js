const express = require('express');
const router = express.Router();
//@router GET api/users/test 
//@desc Just to check the users route
//@access PUBLIC
router.get('/test', (req,res)=>{res.json({
    msg: "users works"
})})

module.exports = router;