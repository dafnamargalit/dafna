import React from 'react';
import {Link} from 'react-router-dom';

import submerge from '../media/images/dafna-web.png';

import './Landing.css';

const Landing = () => {
        return (
            <div className="Landing">
            <div className="desktop">
                <img src={submerge} className="landing-image"></img>
                <div className = "centered-text">
                    <div className = "text-type">
                    submerge <br></br> 2.29.20
                    <br></br>
                    </div>
                    <a className="text-link" href="https://distrokid.com/hyperfollow/dafna/submerge">
                    pre-save now
                    </a>
                </div>
               
                <Link to="/home" className="landing-button">
                    Continue To Website
                </Link>
            </div>
            

           
            </div>
        );
    }
export default Landing;
