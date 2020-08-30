import React from 'react';
import {Link} from 'react-router-dom';

import './ClueSix.css'

const ClueSix = () => {
    return(
        <div className="ClueSix">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i class="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE SIX</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            <p style={{color:'pink'}}>found at: Century Theaters</p> <br></br>
            for the <b style={{color:'pink'}}>RECORD</b>, i'm rather impressed <br></br>
            now let's do a little music history test <br></br>
            a revolutionary disc created in 1931 <br></br>
            is now something i love to collect for fun <br></br>
            atop of <b style={{color:'pink'}}>THE HILL</b> is a wee little shop <br></br>
            see if you can catch me there, ready or not <br></br>
            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm</p>
            </div>
        </div>
        </div>
    )
}

export default ClueSix;