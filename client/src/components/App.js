import React from 'react';
//import logo from '../logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";               // UNCOMMENTED
import PrivateRoute from "./PrivateRoute"; // UNCOMMENTED

// import TechItemList from "./TechItemList";
import SignUpForm from './SignUpForm';
import UserList from './UserList';
import TechItemList2 from "./TechItemList2";

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
            <Link to="/users">Techies</Link>
          </li>
          <li>
            <Link to="/"
              onClick = { () =>  {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user_id");
                  localStorage.removeItem("username");
              }
                  }
            >Logout</Link>
          </li>

        </ul>
      </div>
      <Route
        path="/login"
        // component={Login}
        render={props => <Login {...props} isLoggingIn={false} />}
      />
      <PrivateRoute exact path="/protected" component={TechItemList2} />
      <Route
        path='/signupform'
        render={props => <SignUpForm {...props} addingUser={false} />}
      />
      <Route exact path="/users" component={UserList} />

    </Router>

  );
}

export default App;

//  <PrivateRoute exact path="/protected" component={TechItemList} />