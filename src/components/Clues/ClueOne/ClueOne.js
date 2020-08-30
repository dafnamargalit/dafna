import React from 'react';
import {Link} from 'react-router-dom';

import './ClueOne.css'

const ClueOne = () => {
    return(
        <div className="ClueOne">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i className="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE ONE</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            8 different songs <br></br>
            8 different riddles<br></br>
            the journey will be <br></br>
            anything but simple <br></br>
            written here<br></br>
            is your first clue <br></br>
            the second one <br></br>
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
            <br></br>
            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm</p><br></br>

            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
            </div>
        </div>
        </div>
    )
}

export default ClueOne;