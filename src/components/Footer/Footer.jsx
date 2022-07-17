import React from "react";
import './Footer.css'
import {NavLink} from "react-router-dom";

function Footer() {
  return (
    <footer>
        <p>© LEvans Dev</p>
        <ul className="footer-contact-info">
          <li>
              <a href="Contact.html">Email</a>
          </li>
          <li>
              <a href="Contact.html">Facebook</a>
          </li>
          <li>
              <a>330-430-9300</a>
          </li>
        </ul>
        <ul className="footer-pages">
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
    </footer>
  );
}

export default Footer;