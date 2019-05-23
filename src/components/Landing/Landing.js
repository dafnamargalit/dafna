import React from 'react';
import {Link} from 'react-router-dom';

import spirit from './spirit.jpg';
import './Landing.css';

const Landing = () => {
        return (
            <div className="Landing">
                <img src={spirit} className="Background" alt="background"/>
                <img src={spirit} className="resize" alt="album"/>
                <div className="content">
                    <a href="https://fanlink.to/dafna" className="button">Go listen to my new EP!</a>
                </div>
                <Link to="/home" style={{textDecoration:'none'}}>
                    <div className='text'><u>Continue to Website >>></u></div>
                </Link>
            </div>
        );
    }
export default Landing;
