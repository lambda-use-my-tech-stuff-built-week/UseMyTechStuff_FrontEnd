import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import ItemList from './ItemList';


function App() {
  return (
    <div className="App">
      <ItemList
        msgTitle="CheckBox2Status as prop"
        loaderType="Rings"
        size="180"
        color="orange"
      />
    </div>
  );
}

export default App;
