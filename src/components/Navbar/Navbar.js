import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <img className="logo" src={require('../../assets/mindrightmain.svg')} alt="MINDRIGHT logo" />
      </div>

      <div className="navRight">
        <div className="navLinks">
          <Link to="/" className="navLink" href="#">Home</Link>
          <Link to="/explore" className="navLink" href="#">Explore</Link>
          <Link to="/about" className="navLink" href="#">About</Link>
          <Link to="/login" className="navLink" href="#">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;