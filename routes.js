var express = require('express');

var userCrtl = require('./app/api/user');



var router = express.Router();

router.route('/register').post(userCrtl.register);


module.exports = router;
