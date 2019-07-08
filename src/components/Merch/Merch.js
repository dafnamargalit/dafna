import React from 'react';
import {Link} from 'react-router-dom';
import merch from '../media/gifs/merch.gif';
// import valGirl from '../media/gifs/val.gif';
import girl from '../media/images/valentine.png';
import skelly from '../media/images/skelly.png';
import swimmer from '../media/images/swimmer.png';
import dafna from '../media/images/daf.png';
import dafnaPink from '../media/images/daf-pink.png';
import pick from '../media/writing/pick.png';

import './Merch.css'

const Merch = () => {
    return(
        <div className="Merch">
        <div className="Merch-Header">
        <Link to="/folio">
        <div className="container">
        <img className="Merch-Video" src={merch} alt="merch" ></img>
        <div className="overlay">
                <div className="description">
                    Back to 'Folio
                </div>
            </div>
        </div>
        </Link>
        </div>
        <div className="design-row">
        <a href="https://bonfire.com/dafna-valentine">
        <img className="design" src={girl} alt="girl"></img>
        </a>
        <a href="https://bonfire.com/dafna-skelly">
        <img className="design-2" src={skelly} alt="skelly"></img>
        </a>
        <a href="https://bonfire.com/dafna-swimming">
        <img className="design-2" src={swimmer} alt="swimmer"></img>
        </a>
        <a href="https://bonfire.com/dafna">
        <img className="design-3" src={dafna} alt="dafna"></img>
        </a>
        <a href="https://bonfire.com/dafna-but-in-pink">
        <img className="design-3" src={dafnaPink} alt="dafna"></img>
        </a>
        </div>
        <div className="design-row">
        <img className="pick" src={pick} alt="pick"></img>
        </div>
        {/* <div className="container">
            <img className="merch-image" src={valGirl} alt="val"></img>
            <div className="overlay">
                <div className="description">
                    valentine balloon girl 
                </div>
            </div>
        </div> */}
        </div>
    )
}

export default Merch;