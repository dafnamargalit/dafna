import React from 'react';
import {Link} from 'react-router-dom';

import submerge from '../media/album-covers/header4.jpg';

import './Landing.css';

const Landing = () => {
        return (
            <div className="Landing">
            <div className="desktop">
                <img src={submerge} className="landing-image" alt="album"></img>
                <div className = "centered-text">
                    <div className = "text-type">
                    easy <br></br> 
                    <a className="text-link" href="https://distrokid.com/hyperfollow/dafna/easy">
                    6.12.2020
                    </a>
                    <br></br>
                    </div>
                 
                </div>
               
                <Link to="/home" className="landing-button">
                    Continue To Website
                </Link>
            </div>
            

           
            </div>
        );
    }
export default Landing;
