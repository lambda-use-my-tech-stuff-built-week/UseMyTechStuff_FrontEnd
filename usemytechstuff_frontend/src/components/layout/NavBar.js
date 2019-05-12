import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
// import { connect } from 'react-redux';



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

// const mapStateToProps = state => ({
//   return {

//   }
// })

// export default connect(mapStateToProps)(NavBar);

export default NavBar;
