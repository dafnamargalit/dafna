import React from 'react';
import {Link} from 'react-router-dom';

import album from '../media/album-covers/lonely_game.jpg';
import poster from '../media/images/gothababe-poster.png';
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
                Go pre-save my upcoming song with Mielo!
                    <br></br>
                    <a className="landing-button" href="https://ditto.fm/lonely-game">
                        Pre-Save now!
                    </a>
                </div>
            </div>
            {/* <div className="content">
                <img className="resize" src={poster} alt="poster"></img>
                <div className="landing-description">
                Go buy tickets to my upcoming show!
                    <br></br>
                    <a className="landing-button" href="https://www.eventbrite.com/e/cu-boulder-homecoming-concert-w-goth-babe-johnny-utah-tickets-75721568249">
                        Buy Tix!
                    </a>
                </div>
            </div> */}
            <div className="content">
                <img className="resize" src={merch} alt="merch"></img>
                <div className="landing-description">
                Go get some dope new merch!
                    <br></br>
                    <a className="landing-button" href="https://www.bonfire.com/store/dafna/" style={{padding:'1em'}}>
                        Buy Merch!
                    </a>
                </div>
            </div>
            <div className="content">
            <img className="resize" src={vid} alt="vid"></img>
                <div className="landing-description">
                Go check out the new 'valentine' lyric video!
                    <br></br>
                    <a className="landing-button" href="https://tinyurl.com/dafna-valentine">
                        Watch Video!
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
                    <a className="mobile-button" href="https://ditto.fm/lonely-game">
                        Go pre-save my upcoming song with Mielo!
                    </a>

            </div>
            {/* <div className="item">
            <img className="mobile-resize" src={poster} alt="poster"></img>
                <br></br>
                    <a className="mobile-button" href="https://www.eventbrite.com/e/cu-boulder-homecoming-concert-w-goth-babe-johnny-utah-tickets-75721568249">
                        Go buy tickets to my upcoming show!
                    </a>

            </div> */}
            <div className="item">
                <img className="mobile-resize" src={merch} alt="merch"></img>
                <br></br>
                    <a className="mobile-button" href="https://www.bonfire.com/store/dafna/" style={{padding:'1em'}}>
                        Buy some dope new merch!
                    </a>
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
