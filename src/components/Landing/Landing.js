import React from 'react';
 import {Link} from 'react-router-dom';

// import background from "../media/album-covers/header4.jpg";
import './Landing.css';

const Landing = () => {
        return (
            <div>
                <div className="Landing-Desktop">
                    <div className="announcement-desktop">
                        easy
                        <div id="out-desktop">
                            out now
                        </div>
                    </div>
                    <div className="buttons-desktop">
                        <a href="https://dafna.fanlink.to/easy" id="listen" className="landing-button-desktop">
                            listen now
                        </a>
                        <a href="https://linktr.ee/btfacollective" id="donate" className="landing-button-desktop">
                            donate to BTFA
                        </a>
                        <Link to="/Home" className="landing-button-desktop">
                            continue to website
                        </Link>
                    </div>
                </div>
                <div className="Landing-Mobile">
                    <div className="announcement-mobile">
                        easy
                        <div id="out-mobile">
                            out now
                        </div>
                    </div>
                    <div className="buttons-mobile">
                        <a href="https://dafna.fanlink.to/easy" id="listen" className="landing-button-mobile">
                            listen now
                        </a>
                        <a href="https://linktr.ee/btfacollective" id="donate" className="landing-button-mobile">
                            donate to BTFA
                        </a>
                        <Link to="/Home" className="landing-button-mobile">
                            continue to website
                        </Link>
                    </div>
                </div>
            </div>

            

        );
    }
export default Landing;
