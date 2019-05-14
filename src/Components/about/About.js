import React from 'react';
import Navbar from '../Navbar';

import About from '../images/about.png';

import './About.css';

const Landing = () => {
return(
    <div className="About">
    <Navbar/>
        <header className="About-Header">
            <img src={About} className="About-Title" alt="about"/>
        </header>
        <div className="About-Content">
            who is dafna?
        </div>
    </div>
);
}

export default Landing;