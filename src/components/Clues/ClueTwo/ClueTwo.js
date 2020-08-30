import React from 'react';
import {Link} from 'react-router-dom';

import './ClueTwo.css'

const ClueTwo = () => {
    return(
        <div className="ClueTwo">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i className="clue-arrow clue-left"></i>
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
            if you found this, post it on your insta story <br></br>
            don’t forget to tag me! <br></br>
            so I can witness your glory
            <br></br>
            <br></br>
            (@dafnamusic)
            <br></br>
            <br></br>
            so glad to see you’re doing so well <br></br>
            to find where i'll be go to this URL: <Link to="/tRquVs" style={{color: 'pink'}}>https://dafna.rocks/tRquVs</Link> <br></br>
            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm</p><br></br>
            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
            </div>
        </div>
        </div>
    )
}

export default ClueTwo;