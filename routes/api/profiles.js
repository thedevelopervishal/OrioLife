const express = require('express');
const router = express.Router();

//@router GET api/profiles/test 
//@desc Just to check the profiles route
//@access PUBLIC
router.get('/test', (req,res)=>{res.json({
    msg: "profiles works"
})})

module.exports = router;