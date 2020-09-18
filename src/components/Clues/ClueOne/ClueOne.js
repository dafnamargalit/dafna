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
            will be found somewhere new<br></br>
            <br></br>
            in 1959 the Mercury Seven <br></br>
            set out into space on a special mission <br></br>
            one of the astronauts who was very well known <br></br>
            was lucky enough to call Boulder his home <br></br>
            i'll be at the park that is this man's namesake <br></br>
            but only from 3-4pm so don't keep me waiting!<br></br>
            <br></br>
            <p style={{color:'pink'}}>reminder: i'll only be here from 3-4pm</p><br></br>

            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
            </div>
        </div>
        </div>
    )
}

export default ClueOne;