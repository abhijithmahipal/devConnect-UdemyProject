const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@desc     Test route in users
//@access   Public
router.get('/',(req,res)=> res.send('Users route'));

module.exports = router;