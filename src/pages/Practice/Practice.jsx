import React from "react";
import './Practice.css'
import {
    NavLink,
    Outlet,
} from "react-router-dom"
import DivorceDissolution from "./PracticeAreas/DivorceDissolution";

function Practice() {
  return (
    <main id = "practice-page">
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
        <Outlet />
        {/* <ul className="practice-areas-shortcut">
            <a href="#divorce-dissolution-exp">
                <li>
                    <h4>Divorce & Dissolution</h4>
                </li>
            </a>
            <a href="#family-law-exp">
                <li>
                    <h4>Family Law</h4>
                </li>
            </a>
            <a href="#landlord-tenant-exp">
                <li>
                    <h4>Landlord & Tenant</h4>
                </li>
            </a>
            <a href="#discrimination-exp">
                <li>
                    <h4>Discrimination</h4>
                </li>
            </a>
            <a href="#sexual-harrassment-exp">
                <li>
                    <h4>Sexual Harrassment</h4>
                </li>
            </a>
            <a href="#personal-injury-exp">
                <li>
                    <h4>Personal Injury</h4>
                </li>
            </a>
            <a href="#unemployment-appeals-exp">
                <li>
                    <h4>Unemployment Appeals</h4>
                </li>
            </a>
        </ul>
        <section id="divorce-dissolution-exp">
            <h3>Divorce & Dissolution</h3>
            <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit 
                in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                  aeterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
        </section>
        <section id="family-law-exp">
            <h3>Family Law</h3>
            <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit 
                in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                  aeterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
        </section>
        <section id="landlord-tenat-exp">
            <h3>Landlord & Tenat</h3>
            <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit 
                in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                eterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
        </section>
        <section id="discrimination-exp">
            <h3>Discrimination</h3>
            <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit 
                in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                  aeterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
        </section>
        <section id="sexual-harrassment-exp">
            <h3>Sexual Harrassment</h3>
            <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit 
                in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                  aeterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
        </section>
        <section id="personal-injury-exp">
            <h3>Personal Injury</h3>
            <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit 
                in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                  aeterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
        </section>
        <section id="unemployment-appeals-exp">
            <h3>Unemployment Appeals</h3>
            <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit 
                in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                  aeterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
        </section> */}
  </main>
  );
}

export default Practice;