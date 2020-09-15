import React from 'react';
import {Link} from 'react-router-dom';

import './ClueFive.css'

const ClueFive = () => {
    return(
        <div className="ClueFive">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i class="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE FIVE</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            <p style={{color:'pink'}}>found at : The Laughing Goat on Pearl</p>
            <p using style={{color:'pink'}}>using the following format, spell out the location of the next clue: <br></br>
            <b>[song title, line number, word number, letter number]</b><br></br>(all of my lyrics are on genius)</p>

            "valentine", 6, 6, 1 <br></br>
            "let u go", 1, 2, 4 <br></br>
            "yours someday", 11, 2, 3 <br></br>
            "easy", 25, 10, 10 <br></br>
            "submerge", 10, 2, 2 <br></br>
            "do u feel how i feel ?", 13, 5, 2 <br></br>
            "by myself", 5, 4, 6 <br></br>
            <br></br>
            (space)
            <br></br>
            <br></br>
            "for now", 1, 1, 3 <br></br>
            "swimming", 8, 3, 6 <br></br>
            "the devil's dance", 17, 2, 3 <br></br>
            "oblivion", 3, 4, 3 <br></br>
            "if you're a dove", 7, 4, 1 <br></br>
            "holy", 9, 6, 6 <br></br>
            "stand still", 5, 4, 4 <br></br>
            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm on 9/22</p><br></br>

            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
            </div>
        </div>
        </div>
    )
}

export default ClueFive;