import React from 'react';

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <img className="logo" src={require('../../assets/mindrightlogoMin.png')} />
      </div>

      <div className="navRight">
        <div className="navLinks">
          <a className="navLink" href="#">Home</a>
          <a className="navLink" href="#">Explore</a>
          <a className="navLink" href="#">Search</a>
          <a className="navLink" href="#">About</a>
          <a className="navLink" href="#">Support</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;