//==================
// Here we import the react component again and then
// the new dependencie reactdom that actually renders
// the application onto the screen.
//==================
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import cookie from 'react-cookie';
import routes from './routes';
import reducers from './reducers/index';
import ReactGA from 'react-ga';
import { AUTH_USER } from './actions/types';

//==================
// Here we want to import our stylesheets so that
// webpack knows to grab it and compile it.
//==================
require('./assets/stylesheets/base.scss');
require('./assets/stylesheets/lemonade.scss');
require('./assets/stylesheets/navigation.scss');

ReactGA.initialize('UA-000000-01');

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers,{},window.devToolsExtension ? window.devToolsExtension(): undefined);

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
}

//==================
// Now we replace our App component with the routes component
// and substitute it into the function below
//==================


//==================
// This command actually renders the component into
// the element with the id #app which we added in
// the index.html file. Instead of serving the <app /> like we did previously
// we now serve the Router we defined in the router.js file.
//==================
ReactDOM.render(  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>, document.querySelector('#app'));
