import React from 'react';
import {Link} from 'react-router-dom';

import album from '../media/album-covers/swimming.jpg';
import './Landing.css';

const Landing = () => {
        return (
            <div className="Landing">
                <img src={album} className="Background" alt="background"/>
                <img src={album} className="resize" alt="album"/>
                <div className="content">
                    <a href = 'https://distrokid.com/hyperfollow/dafna/swimming-3' className="landing-button">Go pre-save to my upcoming single!</a>
                </div>
                <Link to="/home" style={{textDecoration:'none'}}>
                    <div className='text'><u>Continue to Website >>></u></div>
                </Link>
            </div>
        );
    }
export default Landing;
