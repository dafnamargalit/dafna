import React from 'react';
 import {Link} from 'react-router-dom';
 import YouTubePlayer from 'react-player/lib/players/YouTube';
import './Landing.css';

const Landing = () => {
        return (
            <div>
                <div className="Landing-Desktop">
                    <div className="announcement-desktop">
                        let u go
                        <div id="out-desktop">
                            out now
                        </div>
                        
                    </div>
                    <div className="buttons-desktop">
                        <a href="https://dafna.fanlink.to/let-u-go" id="watch" className="landing-button-desktop">
                            listen now
                        </a>
                        <a href="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw?view_as=subscriber" id="listen" className="landing-button-desktop">
                            watch some vids
                        </a>
                        <Link to="/Home" className="landing-button-desktop">
                            continue to website
                        </Link>
                    </div>
                </div>
                <div className="Landing-Mobile">
                    <div className="announcement-mobile">
                        let u go
                        <div id="out-mobile">
                           out now
                        </div>
                    </div>
                    <div className="buttons-mobile">
                    <a href="https://dafna.fanlink.to/let-u-go" id="watch" className="landing-button-mobile">
                            listen now
                        </a>
                        <a href="https://www.youtube.com/channel/UCzPtND9EY5MkOepLzllAbiw?view_as=subscriber" id="listen" className="landing-button-mobile">
                            watch some vids
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
