import React from 'react';
import {Link} from 'react-router-dom';

import album from '../media/album-covers/bymeself.jpg';
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
                Go presave my upcoming single, 'by myself'!
                    <br></br>
                    <a className="landing-button" href="https://distrokid.com/hyperfollow/dafna/by-myself">
                        PreSave now!
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
                    <a className="mobile-button" href="https://distrokid.com/hyperfollow/dafna/by-myself">
                        Go presave to my upcoming single!
                    </a>

            </div>
            <div className="item">
            <img className="mobile-resize" src={poster} alt="poster"></img>
                <br></br>
                    <a className="mobile-button" href="https://bit.ly/dafnafox">
                        Buy Tickets for Dafna at Fox Theatre
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
                        Watch Lyric Video
                    </a>
            </div>
            <div className="small-item">
                <br></br>
                <br></br>
                <Link className="mobile-button" to="/home">
                Continue to Website
                </Link>
            </div>
            </div>
            

           
            </div>
        );
    }
export default Landing;
