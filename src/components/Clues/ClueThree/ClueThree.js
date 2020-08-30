import React from 'react';
import {Link} from 'react-router-dom';

import './ClueThree.css'

const ClueThree = () => {
    return(
        <div className="ClueThree">
        <div className = "clue-top">
            <Link to="/scavenger-hunt" className="ClueBack">
            <div className="ClueBack">
            <i class="clue-arrow clue-left"></i>
            BACK TO HUNT</div>
            </Link>
            <div className="ClueHeading">CLUE THREE</div>
        </div>
        <div className = "clue-box">
            <div className="clue-text">
            <p style={{color:'pink'}}>found at: will vill east</p> <br></br>
            <br></br>
            i can’t believe you’ve made it this far! <br></br>
            i hope you don’t find this next clue bizarre <br></br>
            <br></br>
            when i was a freshman, back in 2018<br></br>
            i set out to live one of my dreams<br></br>
            i knew that i wanted to be the <b style={{color:'pink'}}>GOAT</b><br></br>
            so I formed a band and we played our first show<br></br>
            the world was my oyster and oysters make <b style={{color:'pink'}}>PEARLS</b><br></br>
            this cafe makes really good cinnamon swirls <br></br>
            <p style={{color:'pink'}}>reminder: i'll only be here from 6-7pm</p>
            </div>
        </div>
        </div>
    )
}

export default ClueThree;