import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./Login";
// import PrivateRoute from "./PrivateRoute";
// import ItemList from './ItemList';
import NavBar from './layout/NavBar';
import SignUpForm from './SignUpForm';


function App() {
  return (
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
        <PrivateRoute exact path="/protected" component={ItemList} /> */}
      </div>
    </Router>
  );
}

export default App;