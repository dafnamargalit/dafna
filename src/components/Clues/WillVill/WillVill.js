import React from 'react';
import {Link} from 'react-router-dom';
import Weast from './weast.jpg';

import './WillVill.css'

const WillVill = () => {
    return(
        <div className="WillVill">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i class="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">LOCATION</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            <img src={Weast} className="image" alt="weast"/>
            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
            </div>
        </div>
        </div>
    )
}

export default WillVill;