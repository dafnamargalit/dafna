import React from 'react';
import {Link} from 'react-router-dom';

import './ClueEight.css'

const ClueEight = () => {
    return(
        <div className="ClueEight">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i className="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE EIGHT</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            <p style={{color:'pink'}}>found at: The Fox Theatre</p> <br></br>
            congrats! you're the winner<div style={{color:'pink'}}>*</div> of this little game <br></br>
            to collect your prize DM me your address and name <br></br>
            i'll send you some merch, you can choose which you like <br></br>
            and i'll buy you some coffee, any time, day or night <br></br>
            <br></br>
            and so it ends, i hope you had fun! <br></br>
            this concludes  <b style={{color:'pink'}}>I LOVE YOU</b> the scavenger hunt <br></br>
            but don't worry, festivities don't have to end<br></br>
            <b style={{color:'pink'}}>I LOVE YOU</b> the album comes out tonight at 10!<br></br>

            <p style={{color:'pink'}}>*the winner is the person who found the physical clue</p>

            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
            </div>
        </div>
        </div>
    )
}

export default ClueEight;