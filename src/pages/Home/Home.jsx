import React from "react";
import './Home.css';
import SlideShow from "../../components/SlideShow/SlideShow";

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
                    <a href="About.html"><button type="button">Practice Areas</button></a>
                    <a href="About.html"><button type="button">Contact Me</button></a>
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
                        <a href="Practice.html">
                            <figure id="divorce-dissolution">
                                <img src={require("./images/Divorce-icon.png")} alt="Divorce n Dissolution Icon" title="Divorce Icon" />
                                <figcaption>Divorce & Dissolution</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="Practice.html">
                            <figure id="family-law">
                                <img src={require("./images/Family-Law-icon.png")} alt="Family Law Icon" title="Family Law Icon" />
                                <figcaption>Family Law</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="Practice.html">
                            <figure id="landlord-tenat">
                                <img src={require("./images/Landlord-&-Tenat-icon.png")} alt="Landlord & Tenat Icon" title="Landlord & Tenat Icon" />
                                <figcaption>Landlord <br /> & Tenant</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="Practice.html">
                            <figure id="discrimination">
                                <img src={require("./images/Discrimination-icon.png")} alt="Discrimination Icon" title="Discrimination Icon" />
                                <figcaption>Discrimination</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="Practice.html">
                            <figure id="sexual-harrassment">
                                <img src={require("./images/Sexual-Harrassment-icon.png")} alt="Sexual Harrassment Icon" title="Sexual Harrassment Icon" />
                                <figcaption>Sexual Harrassment</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="Practice.html">
                            <figure id="personal-injury">
                                <img src={require("./images/Personal-Injury-icon.png")} alt="Personal Injury Icon" title="Personal Injury Icon" />
                                <figcaption>Personal Injury</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="Practice.html">
                            <figure id="unemployment-appeals">
                                <img src={require("./images/Unemployment-Appeals-icon.png")} alt="Unemployment Appeals Icon" title="Unemployment Appeals Icon" />
                                <figcaption>Unemployment Appeals</figcaption>
                            </figure>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main></>
  );
}

export default Home;