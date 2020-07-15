import React from 'react';
 import {Link} from 'react-router-dom';

// import background from "../media/album-covers/header4.jpg";
import './Landing.css';

const Landing = () => {
        return (
            <div>
                <div className="Landing-Desktop">
                    <div className="announcement-desktop">
                        yours someday
                        <div id="out-desktop">
                            7.17.2020
                        </div>
                    </div>
                    <div className="buttons-desktop">
                        <a href="https://distrokid.com/hyperfollow/dafna/yours-someday-3" id="listen" className="landing-button-desktop">
                            pre-save now
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
                        yours someday
                        <div id="out-mobile">
                           7.17.2020
                        </div>
                    </div>
                    <div className="buttons-mobile">
                        <a href="https://distrokid.com/hyperfollow/dafna/yours-someday-3" id="listen" className="landing-button-mobile">
                            pre-save now
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
