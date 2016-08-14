const authCrtl = require('./app/controllers/auth'),
      asociacionCrtl = require('./app/controllers/asociacion'),
      eventoCrtl=require('./app/controllers/evento'),
      express = require('express'),
      passportService = require('./config/passport'),
      passport = require('passport');

      // Middleware to require login/auth
      const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {
        // Initializing route groups
const apiRoutes = express.Router(),
      authRoutes = express.Router(),
      asociacionRoutes = express.Router();
      eventoRoutes= express.Router();
    //=========================
    // Auth Routes
    //=========================

  // Set auth routes as subgroup/middleware to apiRoutes
apiRoutes.use('/auth', authRoutes);

  // Registration route
authRoutes.post('/register', authCrtl.register);
authRoutes.post('/registerAso', authCrtl.registerAso);



//=========================
// Asociacion Routes
//=========================

// Set auth routes as subgroup/middleware to apiRoutes

// Set url for API group routes

apiRoutes.use('/asociacion', asociacionRoutes);
asociacionRoutes.get('/find',asociacionCrtl.findAllAsociacion);
asociacionRoutes.post('/add',asociacionCrtl.addAsociacion);
asociacionRoutes.get('/:id',asociacionCrtl.findById);
asociacionRoutes.put('/:id/update',asociacionCrtl.updateAsociacion);
asociacionRoutes.delete('/:id/delete',asociacionCrtl.deleteAsociacion);


//=========================
// Evento Routes
//=========================

// Set auth routes as subgroup/middleware to apiRoutes

// Set url for API group routes

apiRoutes.use('/evento', eventoRoutes);
eventoRoutes.get('/find',eventoCrtl.findAllEvento);
eventoRoutes.post('/add',eventoCrtl.addEvento);
eventoRoutes.get('/:id',eventoCrtl.findById);
eventoRoutes.put('/:id/update',eventoCrtl.updateEvento);
eventoRoutes.delete('/:id/delete',eventoCrtl.deleteEvento);


app.use('/api', apiRoutes);
};
