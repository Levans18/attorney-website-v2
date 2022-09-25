import React from "react";
import './Footer.css'
import {NavLink} from "react-router-dom";
import { AwesomeButtonSocial } from 'react-awesome-button'
import "react-awesome-button/dist/styles.css";

/*
 Footer split up into a LARGE 
 FOOTER and SMALL FOOTER for smartphones
 */

function Footer() {
  return (
    <footer>
        <div className="left-container">
            {/* Practice Areas Section*/}  
            <ul className="footer-practice-areas">
                <h3>
                    Practice Areas
                </h3>
                <li className="practice-area">
                    <NavLink className="footer-practice-link" to={"practice/Divorce-Dissolution"} activeclassname="active footer-practice-link">Divorce & Dissolution</NavLink>
                </li>
                <li className="practice-area">
                    <NavLink className="footer-practice-link" to={"practice/Family-Law"} activeclassname="active footer-practice-link">Family Law</NavLink>
                </li>
                <li className="practice-area">
                    <NavLink className="footer-practice-link" to={"practice/Landlord-Tenant"} activeclassname="active footer-practice-link">Landlord & Tenant</NavLink>
                </li>
                <li className="practice-area">
                    <NavLink className="footer-practice-link" to={"practice/Discrimination"} activeclassname="active footer-practice-link">Discrimination</NavLink>
                </li>
                <li className="practice-area">
                    <NavLink className="footer-practice-link" to={"practice/Sexual-Harrassment"} activeclassname="active footer-practice-link">Sexual Harrassment</NavLink>
                </li>
                <li className="practice-area">
                    <NavLink className="footer-practice-link" to={"practice/Personal-Injury"} activeclassname="active footer-practice-link">Personal Injury</NavLink>
                </li>
                <li className="practice-area">
                    <NavLink className="footer-practice-link" to={"practice/Unemployment-Appeals"} activeclassname="active footer-practice-link">Unemployment Appeals</NavLink>
                </li>

            </ul>
            {/* Contact Info Section*/}  
            <ul className="footer-contact-info">
                <h3>Contact</h3>
                <li>
                <a href="mailto:twevans@neo.rr.com" className="footer-contact-link">Email</a>
                </li>
                <li>
                <a href="https://www.facebook.com/twelaw329/" target="_blank" rel="noreferrer" className="footer-contact-link">Facebook</a>
                </li>
                <li>
                    <NavLink to="/contact" activeclassname="active" className="footer-contact-link">330-430-9300</NavLink>
                </li>
            </ul>
            {/*Pages Section*/}  
            <ul className="footer-pages">
                <h3>Pages</h3>
                <li>
                    <NavLink className="footer-page-link" to="/" activeclassname="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="footer-page-link practice-areas" to="/practice" activeclassname="active">
                        Practice Areas
                    </NavLink>
                </li>
                <li>
                    <NavLink className="footer-page-link contact" to="/contact" activeclassname="active">
                        Contact
                    </NavLink>
                </li>
            </ul> 
        </div>

        {/* Location Info Section*/}  
        <ul className="footer-location-info">
            <h3>Location</h3>
            <li>
                <img src={require("./images/Stark-County.png")} alt="law-building"/>
            </li>
            <p>
                Serving Stark and surrounding counties.
            </p>
        </ul>
        {/* Small Footer Section :: Not visible until Smartphone size*/}  
        <ul className="small-footer">
            <div className="actual-links">
                <AwesomeButtonSocial type="facebook" url="https://www.facebook.com/twelaw329/"></AwesomeButtonSocial>
                <AwesomeButtonSocial type="whatsapp" id="phone-icon-link"></AwesomeButtonSocial>
            </div>
            <div className="shameless-plug">
                <a href="https://github.com/levans18/" target="_blank" rel="noreferrer"><AwesomeButtonSocial type="github"></AwesomeButtonSocial></a>
            </div>

        </ul>
    </footer>
  );
}

export default Footer;