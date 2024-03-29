import React from "react";
import './Home.css';
import SlideShow from "../../components/SlideShow/SlideShow";
import {Link,NavLink} from "react-router-dom";
import {AwesomeButton} from "react-awesome-button";
import { AwesomeButtonSocial } from 'react-awesome-button'
import "react-awesome-button/dist/styles.css";

function Home() {

  return (
    <><main id="home-page">
        <SlideShow/>
        <section id="about-preview">
            <div className="body">
                <div className="img-container">
                    <img src={require("./images/Todd-W-Evans.jpg")} alt="Todd W. Evans" title="Picture of Todd W. Evans" id="todd-img"/>
                </div>
                <div className="backstory-container">
                    <p>Todd W. Evans Lorem ipsum dolor sit amet, te nam assum nihil dissentiet. Ei vel diam saepe percipitur. Quot elit
                    in sed, ius bonorum propriae democritum ea, te eam principes persequeris adversarium.
                    Te case putant vix, illum facilisi similique mel at. Soluta honestatis vix an, iuvaret adversarium mea id,
                    aeterno feugait ea usu. propriae democritum ea, te eam principes persequeris ei vel diam saepe percipitur...</p>
                    <div className="backstory-button-container">
                        <AwesomeButtonSocial type="facebook" url="https://www.facebook.com/twelaw329/">twelaw329</AwesomeButtonSocial>
                        <AwesomeButtonSocial type="whatsapp">330-430-9300</AwesomeButtonSocial>
                        <NavLink to="/contact" activeclassname="active">
                            <AwesomeButton id="contact-page-button">Contact Page</AwesomeButton>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
        <section id="practice-preview">
            <div className="header">
                <h2>Practice Areas</h2>
            </div>
            <div className="body">
                <ul>
                    <li>
                        <Link className="preview-divorce-dissolution" to={"practice/Divorce-Dissolution"}>
                            <figure id="divorce-dissolution">
                                <img src={require("./images/Divorce-icon.png")} alt="Divorce n Dissolution Icon" title="Divorce Icon" />
                                <figcaption>Divorce & Dissolution</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li>
                        <Link className="preview-divorce-dissolution" to={"practice/Family-Law"}>
                            <figure id="family-law">
                                <img src={require("./images/Family-Law-icon.png")} alt="Family Law Icon" title="Family Law Icon" />
                                <figcaption>Family Law</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li>
                        <Link className="preview-divorce-dissolution" to={"practice/Landlord-Tenant"}>
                            <figure id="landlord-tenat">
                                <img src={require("./images/Landlord-&-Tenat-icon.png")} alt="Landlord & Tenat Icon" title="Landlord & Tenat Icon" />
                                <figcaption>Landlord <br /> & Tenant</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li>
                        <Link className="preview-divorce-dissolution" to={"practice/Discrimination"}>
                            <figure id="discrimination">
                                <img src={require("./images/Discrimination-icon.png")} alt="Discrimination Icon" title="Discrimination Icon" />
                                <figcaption>Discrimination</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li>
                        <Link className="preview-divorce-dissolution" to={"practice/Sexual-Harrassment"}>
                            <figure id="sexual-harrassment">
                                <img src={require("./images/Sexual-Harrassment-icon.png")} alt="Sexual Harrassment Icon" title="Sexual Harrassment Icon" />
                                <figcaption>Sexual Harrassment</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li>
                        <Link className="preview-divorce-dissolution" to={"practice/Personal-Injury"}>
                            <figure id="personal-injury">
                                <img src={require("./images/Personal-Injury-icon.png")} alt="Personal Injury Icon" title="Personal Injury Icon" />
                                <figcaption>Personal Injury</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li>
                        <Link className="preview-divorce-dissolution" to={"practice/Unemployment-Appeals"}>
                            <figure id="unemployment-appeals">
                                <img src={require("./images/Unemployment-Appeals-icon.png")} alt="Unemployment Appeals Icon" title="Unemployment Appeals Icon" />
                                <figcaption>Unemployment Appeals</figcaption>
                            </figure>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </main></>
  );
}

export default Home;