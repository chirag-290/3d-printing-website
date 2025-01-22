const express = require('express');
const { register, login } = require('../controllers/user'); 
const uploadfile=require("../utils/multer")

const router = express.Router();


router.post('/register',uploadfile,register);


router.post('/login', login);

module.exports = router;