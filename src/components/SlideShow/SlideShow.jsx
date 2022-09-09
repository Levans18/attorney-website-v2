import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./SlideShow.css"
import $ from 'jquery';

const SlideShow = () => { 

    return (
        <div className="Bottom-Border">
            <Slide>
                <div className="each-slide-effect">
                    <div id="first-slide">
                        <span className="slide-text">Commited to Your Cause</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div id="second-slide">
                        <span className="slide-text">Over 25 Years of Experience</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div id="third-slide">
                        <span className="slide-text">Aggresive Representation</span>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default SlideShow