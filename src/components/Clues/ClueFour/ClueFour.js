import React from 'react';
import {Link} from 'react-router-dom';

import './ClueFour.css'

const ClueFour = () => {
    return(
        <div className="ClueFour">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i class="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE FOUR</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            </div>
        </div>
        </div>
    )
}

export default ClueFour;