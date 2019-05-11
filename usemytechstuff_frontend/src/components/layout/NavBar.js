import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const NavBar = () => {
  return (
    <nav className="nav-wrapper #1e88e5 blue darken-1 z-depth-2">
      <div className="container">
        <Link to="/" className="brand-logo">Use My Tech Stuff</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default NavBar;
