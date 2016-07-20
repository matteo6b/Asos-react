const passport = require('passport');
const express = require('express');
const config = require('../../config/main');
const jwt = require('jsonwebtoken');
const app = module.exports = express();

// Set up middleware
const requireAuth = passport.authenticate('jwt', { session: false });

// Load models
const User = require('../models/user');


// Export the routes for our app to use

  app.use(passport.initialize());

// Bring in defined Passport Strategy
    require('../../config/passport')(passport);
module.exports = {
    register : function(req, res){

      console.log(req.body);
      if(!req.body.email || !req.body.password) {
        res.status(400).json({ success: false, message: 'Please enter email and password.' });
      } else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password
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
}
