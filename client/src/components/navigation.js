//=================
// Import the dependencies that this component will need
// to function properly
//=================
import React, { Component } from "react";
import { Link } from 'react-router';

//=================
// This is our navigation bar!
//=================
export default class Navigation extends Component {
  render() {
    return (
      <div className="frame bit-1 navigation_container">
        <h3 className="bit-40">Journey into React</h3>
        <ul className="bit-60 nav_menu">
          <li key={100}><Link to="main">Main</Link></li>
          <li key={101}><Link to="register">Register</Link></li>
        </ul>
      </div>
    );
  }
}
