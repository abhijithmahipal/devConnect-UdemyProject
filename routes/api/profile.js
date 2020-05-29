const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@desc     Test route in profile
//@access   Public
router.get('/',(req,res)=> res.send('Profile route'));

module.exports = router;