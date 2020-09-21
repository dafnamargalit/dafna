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
            <i className="arrow left"></i>
            BACK TO WEBSITE</div>
            </Link>
        </div>
        <div className = "middle">
            <div className="LargeHeading">I LOVE YOU</div>
            <div className="Subtitle">the scavenger hunt</div>
            <Link to='/rules' className="Clue">THE RULES</Link>
            <Link to='/clue1' className="Clue">CLUE 1</Link>
            <Link to='/clue2' className="Clue">CLUE 2</Link>
            <Link to='/clue3' className="Clue">CLUE 3</Link>
            <Link to='/clue4' className="Clue">CLUE 4</Link>
            <Link to='/clue5' className="Clue">CLUE 5</Link>
            {/*
            <Link to='/clue6' className="Clue">CLUE 6</Link>
            <Link to='/clue7' className="Clue">CLUE 7</Link>
            <Link to='/clue8' className="Clue">CLUE 8</Link> */}
        </div>
        <div className = "bottom">
            <Footer></Footer>
        </div>
        </div>
    )
}

export default Scavenger;