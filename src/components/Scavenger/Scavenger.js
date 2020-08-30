import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer';

import './Scavenger.css'

const Scavenger = () => {
    return(
        <div className="Scavenger">
        <div className = "top">
            <Link to="/" className="Back">
            <div className="Back">
            <i class="arrow left"></i>
            BACK TO WEBSITE</div>
            </Link>
        </div>
        <div className = "middle">
            <div className="LargeHeading">I LOVE YOU</div>
            <div className="Subtitle">the scavenger hunt</div>
            <Link to='/clue1' className="Clue">CLUE #1</Link>
        </div>
        <div className = "bottom">
            <Footer></Footer>
        </div>
        </div>
    )
}

export default Scavenger;