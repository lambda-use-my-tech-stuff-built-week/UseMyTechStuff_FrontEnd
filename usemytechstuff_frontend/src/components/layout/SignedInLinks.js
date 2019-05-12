import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/cart">Cart</NavLink></li>
      <li><NavLink to="/login" className="#ef5350 red lighten-1 z-depth-1 waves-effect waves-light btn">Log Out</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
