const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@desc     Test route in posts
//@access   Public
router.get('/',(req,res)=> res.send('Posts route'));

module.exports = router;