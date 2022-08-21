import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo} from "./images/Header-Hero.svg";
import './NavBar.css';

function NavBar() {
  return (
    <header className="banner">
      <div className="header-hero">    
        <Logo id="TWE-Logo"/>
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