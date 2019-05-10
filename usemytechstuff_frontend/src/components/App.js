import React from 'react';
//import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ItemList from './ItemList';
import Login from './Login';
import PrivateRoute from './PrivateRoute'


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Use My Tech Stuff</h1>
        <Route path='/login' component={Login} />
        {/* <ItemList
        msgTitle="CheckBox2Status as prop"
        loaderType="Rings"
        size="180"
        color="orange" */}
        />
    </div>
    </Router>
  );
}

export default App;
