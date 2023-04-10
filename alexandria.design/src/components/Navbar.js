import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar" className="">
      <div className="nav-wrapper">
        <div className="logo">
          <a href="index.html">
            <i className="fas fa-chess-knight"></i>Alexandria Troup
          </a>
        </div>

        <ul id="menu">
          <li>
            <a href="#design">Design</a>
          </li>
          <li>
            <a href="#illustration">Illustration</a>
          </li>
          <li>
            <a href="profile.html">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;