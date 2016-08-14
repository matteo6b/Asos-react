const passport = require('passport');
const express = require('express');
const config = require('../../config/main');
const jwt = require('jsonwebtoken');


// Set up middleware
const requireAuth = passport.authenticate('jwt', { session: false });

// Load models
const User = require('../models/user');


function setUserInfo(request) {
  var getUserInfo = {
    _id: request._id,
    firstName: request.profile.firstName,
    lastName: request.profile.lastName,
    email: request.email,
    role: request.role,
  };

  return getUserInfo;
}

// Export the routes for our app to use

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // in seconds
  });
}



    exports.register = function(req, res){

      console.log(req.body);
      if(!req.body.email || !req.body.password) {
        res.status(400).json({ success: false, message: 'Please enter email and password.' });
      } else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password
        });

        // Attempt to save the user
        newUser.save(function(err,user) {
          if (err) {
            return res.status(400).json({ success: false, message: 'That email address already exists.'});
          }
           var userInfo = setUserInfo(user);
          res.status(201).json({
    token: 'JWT ' + generateToken(userInfo),
    user: userInfo
  });
        });
      }

       //do something
    }




  exports.registerAso = function(req, res){

      console.log(req.body);
      if(!req.body.email || !req.body.password) {
        res.status(400).json({ success: false, message: 'Please enter email and password.' });
      } else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
          role:'Asociacion'
        });

        // Attempt to save the user
        newUser.save(function(err) {
          if (err) {
            return res.status(400).json({ success: false, message: 'That email address already exists.'});
          }
          res.status(201).json({ success: true, message: 'Successfully created new user.' });
        });
      }

       //do something
    }
