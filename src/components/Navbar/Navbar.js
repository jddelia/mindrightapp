import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <img className="logo" src={require('../../assets/mindrightlogoMin.png')} />
      </div>

      <div className="navRight">
        <div className="navLinks">
          <Link to="/" className="navLink" href="#">Home</Link>
          <Link to="/explore" className="navLink" href="#">Explore</Link>
          <Link to="/about" className="navLink" href="#">About</Link>
          <Link to="/support" className="navLink" href="#">Support</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;