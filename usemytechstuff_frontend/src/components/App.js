import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import Login from "./Login";               // UNCOMMENTED
 import PrivateRoute from "./PrivateRoute"; // UNCOMMENTED
 import ItemList from './ItemList';         // UNCOMMENTED
import NavBar from './layout/NavBar';




/*
    <Router>
      <div className="App">
        <NavBar />
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



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
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
        <PrivateRoute exact path="/protected" component={ItemList} /> */}
      </div>
    </Router>
  );
}

export default App;