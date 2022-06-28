import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="banner">
              <img src="../resources/images/Scale-Logo.png" alt="filler image atm"/>
              <NavLink className="navbar-link title" to="/">
                Todd Evans Attorney at Law
              </NavLink>
              <nav>
                <ul>
                    <li>
                      <NavLink className="navbar-link" to="/">
                          Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar-link" to="/practice">
                        Practice Areas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar-link" to="/about">
                            About Todd W. Evans
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar-link" to="/contact">
                            Contact
                      </NavLink>
                    </li>
                </ul>
          </nav>
      </header>
  );
}

export default NavBar;