import React from "react";

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
              <a href="Contact.html">Phone Number</a>
          </li>
      </ul>
      <ul className="footer-pages">
          <li>
              <a href="Home.html">Home</a>
          </li>
          <li>
            <a href="Practice.html">Practice Areas</a>
          </li>
          <li>
              <a className="current-page" href="About.html">About</a>
          </li>
          <li>
              <a href="Contact.html">Contact</a>
          </li>
      </ul>
  </footer>
  );
}

export default Footer;