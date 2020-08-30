import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer';

import './Rules.css'

const Rules = () => {
    return(
        <div className="Rules">
        <div className="rules-top">
        <Link to="/scavenger-hunt" className="rules-back">
            <div className="rules-back">
            <i className="rules-arrow rules-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="rules-heading">RULES</div>
        </div>
        <div className = "rules-box">
            <div className="rules-text">
            1. There are a total of 8 clues, and I'll be hiding one clue per day from 9/18 to 9/24 <br></br>
            <br></br>
            2. The next clue will only be in its location from 6pm-7pm the day that the previous clue is posted<br></br>
            <br></br>
            3. ANYONE and EVERYONE can participate <br></br>
            <br></br>
            4. Each clue comes with super cute prizes!!! <br></br>
            <br></br>
            5. After a physical clue is found, it'll be posted here for everyone at 12am the next day<br></br>
            <br></br>
            6. I'll be posting hints and updates on my instagram story so make sure to follow @dafnamusic! <br></br>
            <br></br>
            7. It is super important that you WEAR A MASK to all these locations <br></br>
            <br></br>
            8. Whoever finds the most clues (or final clue if it's a tie) gets free merch and free coffee
            <br></br>
            <br></br>
            Questions or confused about the rules? Shoot me an <a style={{color: 'white'}} href="mailto: dafna.business@gmail.com">email</a> or DM me on insta @dafnamusic 
            </div>
        </div>
        </div>
    )
}

export default Rules;