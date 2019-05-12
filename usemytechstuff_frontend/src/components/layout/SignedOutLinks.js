import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";
import ItemList from '../ItemList';
import SignUpForm from '../SignUpForm';



const SignedOutLinks = () => {
  return (
    <Router>
      <ul className="right">
        <li><NavLink to="/login">Log In</NavLink></li>
        <li><NavLink to="/protected">Protected Page</NavLink></li>
        <li><NavLink to="/SignUpForm">Sign Up</NavLink></li>
      </ul>
      <Route
        path="/login"
        // component={Login}
        render={props => <Login {...props} isLoggingIn={false} />}
      />
      <PrivateRoute exact path="/protected" component={ItemList}
      />
      <Route exact path="/SignUpForm" component={SignUpForm}
      />
    </Router>
  )
}

export default SignedOutLinks;
