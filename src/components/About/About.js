import React from 'react';	
import Navbar from '../Navbar';
import Footer from '../Footer';
import A from '../images/A.png';
import B from './B.png';
import O from './O.png';
import U from './U.png';
import T from './T.png';
import about from './about-me.png';
import Dafna from '../images/dafna.jpg';


import './About.css';

const About = () => {
return(
<div className="About">
<div className="About-Navbar">
<Navbar/>
</div>
<header className="About-Header">
<img src={A} className="About-Title-Large" alt="a"/>
<img src={B} className="About-Title" alt="b"/>
<img src={O} className="About-Title" alt="o"/>
<img src={U} className="About-Title" alt="u"/>
<img src={T} className="About-Title" alt="t"/>
</header>
<div className="About-Wrapper">
<img src={Dafna} className="About-Image" alt='dafna'/>
</div>
<img src={about} className="About-Me" alt="(about me)"/>
<div className="About-Content">
<div className="About-Text">
<p> Dafna is an 18 year old singer/songwriter, producer, and undergraduate engineering student from Boulder, CO.
When she's not making music, studying, or coding, you can find Dafna doing what she loves most: napping.
Additional hobbies include laughing at her own jokes, eating,
rollerblading (but only when the temperature is between 60 and 80 degrees Fahrenheit),
and creating this website. </p>
</div>
</div>
<Footer />
</div>
);
}

export default About;
