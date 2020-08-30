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
            found at : The Laughing Goat on Pearl
            <br></br>
            <br></br>
            let's transport to october, 2019<br></br>
            i sang in the ballroom of this big building<br></br>
            i opened for emo baby and keanu reeves<br></br>
            i had so much fun, i didn't want to leave<br></br>
            <br></br>
            i hope you'll find me, i'll be at the entrance<br></br>
            facing towards broadway, from 6-7<br></br>

            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm</p>
            </div>
        </div>
        </div>
    )
}

export default ClueFour;