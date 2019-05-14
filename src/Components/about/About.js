import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Title from '../images/about.png';

import './About.css';

const About = () => {
return(
    <div className="About">
    <Navbar/>
    <div className="About-Content">
        This page is under construction.
    </div>
        {/* <header className="About-Header">
            <img src={About} className="About-Title" alt="about"/>
        </header>
        <div className="About-Content">
            who is dafna?
        </div> */}
        <div className="About-Footer">
        <Footer />
        </div>
    </div>
);
}

export default About;