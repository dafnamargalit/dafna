import React from 'react';
import {Link} from 'react-router-dom';

import './ClueTwo.css'

const ClueTwo = () => {
    return(
        <div className="ClueTwo">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i class="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE Two</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            8 different songs <br></br>
            8 different riddles<br></br>
            the journey will be <br></br>
            anything but simple <br></br>
            written here<br></br>
            is your first clue <br></br>
            the second Two <br></br>
            will be found at CU<br></br>
            <br></br>
            with interim dean keith molenaar <br></br>
            the building you’re looking for <br></br>
            isn’t too far <br></br>
            it’s known to be ugly <br></br>
            and known to be gray <br></br>
            but this is the building<br></br>
            where I spend most of my days <br></br>
            <br></br>
            you’ll find me and the next clue <br></br>
            outside the front entrance <br></br>
            but please wear a mask <br></br>
            so I won’t get suspended!
            </div>
        </div>
        </div>
    )
}

export default ClueTwo;