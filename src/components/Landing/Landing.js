import React from 'react';
import {Link} from 'react-router-dom';

import album from '../media/album-covers/swimming.jpg';
import poster from '../media/images/daf-fox.png';
import vid from '../media/images/val-lyric.png';
import merch from '../media/images/merch.jpg';
import './Landing.css';

const Landing = () => {
        return (
            <div className="Landing">
            <div>
            <div className="desktop">
            <div className="content">
                <img className="resize" src={album} alt="album"></img>
                <div className="landing-description">
                Go listen to my new new single, 'swimming'!
                    <br></br>
                    <a className="landing-button" href="https://dafna.fanlink.to/swimming">
                        Listen now!
                    </a>
                </div>
            </div>
            <div className="content">
                <img className="resize" src={poster} alt="poster"></img>
                <div className="landing-description">       
                Go buy tickets for my upcoming show at The Fox Theatre!
                    <br></br>
                    <a className="landing-button" href="https://bit.ly/dafnafox">
                        Get Tickets!
                    </a>
                </div>
            </div>
            <div className="content">
                <img className="resize" src={merch} alt="merch"></img>
                <div className="landing-description">
                Go get some dope new merch!
                    <br></br>
                    <Link className="landing-button" to="/merch" style={{padding:'1em'}}>
                        Buy Merch
                    </Link>
                </div>
            </div>
            <div className="content">
            <img className="resize" src={vid} alt="vid"></img>
                <div className="landing-description">
                Go check out the new 'valentine' lyric video!
                    <br></br>
                    <a className="landing-button" href="https://tinyurl.com/dafna-valentine">
                        Watch Video
                    </a>
                </div>
            </div>
            <div className="continue">
            <Link to="/home" style={{textDecoration:'none'}}>
                    <div className="landing-button">Continue to Website</div>
            </Link>
            </div>
            </div>
            </div>

            <div className="mobile">
            <div className="item">
            <img className="mobile-resize" src={album} alt="album"></img>
                <br></br>
                    <a className="mobile-button" href="https://dafna.fanlink.to/swimming">
                        Go listen to my new single!
                    </a>

            </div>
            <div className="item">
            <img className="mobile-resize" src={poster} alt="poster"></img>
                <br></br>
                    <a className="mobile-button" href="https://bit.ly/dafnafox">
                        Buy Tickets for Dafna at Fox Theatre 10/2/19
                    </a>
            </div>
            <div className="item">
                <img className="mobile-resize" src={merch} alt="merch"></img>
                <br></br>
                    <Link className="mobile-button" to="/merch" style={{padding:'1em'}}>
                        Buy some dope new merch!
                    </Link>
            </div>
            <div className="item">
            <img className="mobile-resize" src={vid} alt="vid"></img>
                <br></br>
                    <a className="mobile-button" href="https://tinyurl.com/dafna-valentine">
                        Go watch the new lyric video for 'valentine'
                    </a>
            </div>
                <div className="small-item">
                <Link to="/home" style={{textDecoration:'none'}}>
                    <div className="mobile-button">Continue to Website</div>
                </Link>
                </div>
            </div>
            

           
            </div>
        );
    }
export default Landing;
