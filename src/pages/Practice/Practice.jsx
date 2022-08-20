import React from "react";
import './Practice.css'
import {
    NavLink,
    Outlet,
} from "react-router-dom"
import DivorceDissolution from "./PracticeAreas/DivorceDissolution";

function Practice() {
  return (
    <main id="practice-page">
        <ul className="practice-areas">
            <li className="practice-areas">
                <NavLink className="practice-navbar-NavLink" to={"Divorce-Dissolution"} activeclassname="active practice-navbar-NavLink">Divorce & Dissolution</NavLink>
            </li>
            <li className="practice-areas">
                <NavLink className="practice-navbar-NavLink" to={"Family-Law"} activeclassname="active practice-navbar-NavLink">Family Law</NavLink>
            </li>
            <li className="practice-areas">
                <NavLink className="practice-navbar-NavLink" to={"Landlord-Tenant"} activeclassname="active practice-navbar-NavLink">Landlord & Tenant</NavLink>
            </li>
            <li className="practice-areas">
                <NavLink className="practice-navbar-NavLink" to={"Discrimination"} activeclassname="active practice-navbar-NavLink">Discrimination</NavLink>
            </li>
            <li className="practice-areas">
                <NavLink className="practice-navbar-NavLink" to={"Sexual-Harrassment"} activeclassname="active practice-navbar-NavLink">Sexual Harrassment</NavLink>
            </li>
            <li className="practice-areas">
                <NavLink className="practice-navbar-NavLink" to={"Personal-Injury"} activeclassname="active practice-navbar-NavLink">Personal Injury</NavLink>
            </li>
            <li className="practice-areas">
                <NavLink className="practice-navbar-NavLink" to={"Unemployment-Appeals"} activeclassname="active practice-navbar-NavLink">Unemployment Appeals</NavLink>
            </li>
        </ul>
        <div className="practice-container">
            <section className="left">
                <Outlet />
            </section>
            <section className="right">
                <h2>Direct Email</h2>
                <br/>
                <form action="mailto:twevans@neo.rr.com"
                    method="POST"
                    enctype="multipart/form-data"
                    name="EmailForm">
                    Name:
                <input type="text" size="19" name="Contact-Name"/><br/><br/>
                    Email:
                <input type="email" name="Contact-Email"/><br/><br/>
                Message
                <br/>
                <textarea name="Contact-Message" rows="7" cols="30">
                </textarea>
                <br/>
                <button type="submit" value="Submit">Send</button>
                </form> 
             </section>
        </div>
  </main>
  );
}

export default Practice;