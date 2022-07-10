import React from "react";
import './Contact.css'

function Contact() {
  return (
    <main className="contact">
      <div className="contact-box">
        <figure id="phone-number">
          <img src={require("./images/Phone-icon.png")} title="Phone Icon" alt="Phone Icon" />
          <figcaption>330-430-9300</figcaption>
        </figure>
        <figure id="email">
          <a href="mailto:twevans@neo.rr.com"><img src={require("./images/Email-icon.png")} title="Email Icon" alt="Email Icon" /></a>
          <a href="mailto:twevans@neo.rr.com"><figcaption>twevans@neo.rr.com</figcaption></a>
        </figure>
        <figure id="facebook">
          <a href="https://www.facebook.com/twelaw329/" target="_blank" rel="noreferrer"><img src={require("../../resources/images/facebook-icon.png")} title="Email Icon" alt="Email Icon" /></a>
          <a href="https://www.facebook.com/twelaw329/" target="_blank" rel="noreferrer"><figcaption>@twelaw329</figcaption></a>
          </figure>
          </div>
          <aside className="law-image">
          </aside>
          </main>
    );
  }
  export default Contact;