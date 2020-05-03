import React from 'react';	
import Navbar from '../Navbar';
import Footer from '../Footer';
import A from '../media/letters/A-yellow.png';
import B from '../media/letters/B-yellow.png';
import O from '../media/letters/O-yellow.png';
import U from '../media/letters/U-yellow.png';
import T from '../media/letters/T-yellow.png';
import about from '../media/writing/about-me.png';
import Dafna from '../media/images/prof_pic.jpg';


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
<p> Dafna is a 19 year old singer/songwriter, producer, and undergraduate engineering student from Boulder, CO.
When she's not making music, studying, or coding, you can find Dafna doing what she loves most: napping.
Additional hobbies include laughing at her own jokes, eating,
rollerblading (but only when the temperature is between 60 and 80 degrees Fahrenheit),
and creating this website. </p>
</div>
</div>
<div className="About-Footer">
<Footer />
</div>
</div>
);
}

export default About;
