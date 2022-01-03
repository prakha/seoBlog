const express = require('express');
const router = express.Router();
const controller  = require('../controllers/auth');

//validators
const run = require('../validators');
const userSignup = require('../validators/auth');

//console.log(runValidation);
//console.log(userSignupValidator);
//console.log(signup);

router.post('/signup', userSignup.userSignupValidator, run.runValidation, controller.signup);

module.exports = router; 