import React from 'react';
//import logo from '../logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";               // UNCOMMENTED
import PrivateRoute from "./PrivateRoute"; // UNCOMMENTED
// import ItemList from './ItemList';         // UNCOMMENTED
//import NavBar from './layout/NavBar';
// import SignUpForm from './SignUpForm';
import TechItemlist from "./TechItemList";





/*
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/signupform" component={SignUpForm}
          // render={props => <SignUpForm {...props} addingUser={true} />}
          />
        </Switch>
        {/* <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/login"
          // component={Login}
          render={props => <Login {...props} isLoggingIn={false} />}
        />
      //  <PrivateRoute exact path="/protected" component={ItemList} /> }
</div>
</Router>
 */


/*
    <Router>
      <div className="App">
        <NavBar />
      </div>
    </Router>
 */




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
        </ul>
      </div>
      <Route
        path="/login"
        // component={Login}
        render={props => <Login {...props} isLoggingIn={false} />}
      />
      <PrivateRoute exact path="/protected" component={TechItemlist} />
    </Router>
  );
}

export default App;