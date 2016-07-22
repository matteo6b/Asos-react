//====================
// Import React and the dependencies we need to make react router work
//====================
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//====================
// Import the different components that will represent the different pages
// of our website.
//====================
import App from './components/app';
import Main from './components/main';
import Register from './components/register';

//====================
// Define our routes
//====================
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='main' component={Main} />
    <Route path='register' component={Register} />
  </Route>
);
