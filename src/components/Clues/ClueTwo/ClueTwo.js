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
            <div className="ClueHeading">CLUE TWO</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            <p style={{color:'pink'}}>found at: CU Engineering Center</p>
            <br></br>
            congratulations! <br></br>
            you’re quite the sleuth <br></br>
            are you sure you’re not nancy drew? <br></br>
            if you found me, post me on your insta story <br></br>
            don’t forget to tag dafna <br></br>
            so she can witness your glory
            <br></br>
            <br></br>
            (@dafnamusic)
            <br></br>
            <br></br>
            so glad to see you’re doing so well <br></br>
            to find the next clue go to this URL: <Link to="/tRquVs" style={{textDecoration:'none', color: 'pink'}}>https://dafna.rocks/tRquVs</Link>
            </div>
        </div>
        </div>
    )
}

export default ClueTwo;