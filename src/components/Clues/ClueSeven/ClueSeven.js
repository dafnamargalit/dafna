import React from 'react';
import {Link} from 'react-router-dom';

import './ClueSeven.css'

const ClueSeven = () => {
    return(
        <div className="ClueSeven">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i class="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE SEVEN</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            <p style={{color:'pink'}}>found at: Albums On The Hill</p> <br></br>
            in this building i headlined my first real show<br></br>
            nearly sold out gig of Dafna and Co.<br></br>
            this show even got written about on crave the sounds blog<br></br>
            the quick brown <b style={{color:'pink'}}>FOX</b> jumps over the lazy dog<br></br>
            <br></br>
            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm on 9/24</p><br></br>

            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
           </div>
        </div>
        </div>
    )
}

export default ClueSeven;