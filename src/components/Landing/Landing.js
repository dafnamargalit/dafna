import React from 'react';
 import {Link} from 'react-router-dom';
 import YouTubePlayer from 'react-player/lib/players/YouTube';
import './Landing.css';

const Landing = () => {
        return (
            <div>
                <div className="Landing-Desktop">
                    <div className="announcement-desktop">
                        yours someday
                        <div id="out-desktop">
                            out now
                        </div>
                        
                    </div>
                    <div className="buttons-desktop">
                         <a href="https://www.youtube.com/watch?v=gdYRMo-R99w&feature=youtu.be" id="watch" className="landing-button-desktop">
                            watch the video
                        </a>
                        <a href="https://www.youtube.com/watch?v=QOTVDxebru4" id="watch" className="landing-button-desktop">
                            watch behind the scenes
                        </a>
                        <a href="https://dafna.fanlink.to/yours-someday" id="listen" className="landing-button-desktop">
                            listen now
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
                           out now
                        </div>
                    </div>
                    <div className="buttons-mobile">
                        <a href="https://www.youtube.com/watch?v=gdYRMo-R99w&feature=youtu.be" id="watch" className="landing-button-mobile">
                            watch the video
                        </a>
                        <a href="https://www.youtube.com/watch?v=QOTVDxebru4" id="watch" className="landing-button-mobile">
                            watch behind the scenes
                        </a>
                        <a href="https://dafna.fanlink.to/yours-someday" id="listen" className="landing-button-mobile">
                            listen now
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
