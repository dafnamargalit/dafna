import React from 'react';
import {Link} from 'react-router-dom';

import submerge from '../media/images/dafna-web.png';

import './Landing.css';

const Landing = () => {
        return (
            <div className="Landing">
            <div className="desktop">
                <img src={submerge} className="landing-image" alt="album"></img>
                <div className = "centered-text">
                    <div className = "text-type">
                    submerge <br></br> 
                    <a className="text-link" href="https://dafna.fanlink.to/submerge">
                    out now
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
