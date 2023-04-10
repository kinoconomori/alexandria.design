import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ setScrollToRef }) => {
  return (
    <nav id="navbar" className="">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to={"/"}>
            <i className="fas fa-chess-knight"></i>Alexandria Troup
          </Link>
        </div>

        <ul id="menu">
          <li>
            <Link
              to="/"
              onClick={() => {
                setScrollToRef("design");
              }}
            >
              <a>Design</a>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                setScrollToRef("illustration");
              }}
            >
              <a>Illustration</a>
            </Link>
          </li>
          <li>
            <Link to={"/profile"}>
              <a href="profile">Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
