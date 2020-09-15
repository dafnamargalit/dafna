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
            <p style={{color:'pink'}}> found at : University Memorial Center </p>
            <br></br>
            i can’t believe you’ve made it this far! <br></br>
            i hope you don’t find this next clue bizarre <br></br>
            <br></br>
            when i was a freshman, back in 2018<br></br>
            i set out to live one of my dreams<br></br>
            i knew that i wanted to be the <b style={{color:'pink'}}>GOAT</b><br></br>
            so I formed a band and we played our first show<br></br>
            the world was my oyster and oysters make <b style={{color:'pink'}}>PEARLS</b><br></br>
            my favorite tea to get here is earl <br></br>

            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm on 9/21</p><br></br>

            <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
            </div>
        </div>
        </div>
    )
}

export default ClueFour;