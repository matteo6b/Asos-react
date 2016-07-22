import axios from 'axios';
import { reset } from 'redux-form';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import { AUTH_USER,
         ERROR_RESPONSE,
         UNAUTH_USER,
         FORGOT_PASSWORD_REQUEST,
         RESET_PASSWORD_REQUEST,
         CLEAR_ERRORS,
         PROTECTED_TEST,
        } from './types';


const API_URL = 'http://localhost:3000/api';

export function errorHandler(error) {
  return {
    type: ERROR_RESPONSE,
    payload: error
  };
}

export function clearErrors() {
  return {
    type: CLEAR_ERRORS
  };
}

export function registerUser({ email,password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/register`, { email, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: AUTH_USER });
      browserHistory.push('/register/profile');
    })
    .catch(response => dispatch(errorHandler(response.data.error)))
  }
}
