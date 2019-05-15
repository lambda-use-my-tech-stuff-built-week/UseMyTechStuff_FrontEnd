import React from 'react';
//import logo from '../logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";               // UNCOMMENTED
import PrivateRoute from "./PrivateRoute"; // UNCOMMENTED
import TechItemlist from "./TechItemList";
// import SignUpForm from './SignUpForm';
// import User from './User';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/signupform">Sign Up</Link>
          </li>
          <li>
            <Link to="/user">Techies</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/login"
        // component={Login}
        render={props => <Login {...props} isLoggingIn={false} />}
      />
      <PrivateRoute exact path="/protected" component={TechItemlist} />
      {/* <PrivateRoute exact path="/user" component={User} />
      <Route
        path='/signupform' component={SignUpForm} /> */}
    </Router>

  );
}

export default App;