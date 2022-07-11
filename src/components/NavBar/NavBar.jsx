import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <header className="banner">
      <div className="header-hero">    
        <img src={require("./images/Scale-Logo.png")} alt="filler atm"/>
        <h1>
          <NavLink className="navbar-link-home title" to="/">
            Todd Evans Attorney at Law
          </NavLink>
        </h1>
      </div>  
      <nav>
        <ul>
            <li>
              <NavLink className="navbar-link" to="/" activeclassname="active">
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link practice-areas" to="/practice" activeclassname="active">
                Practice Areas
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link contact" to="/contact" activeclassname="active">
                    Contact
              </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;