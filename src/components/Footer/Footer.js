import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Spotify from './spotify.svg';

const Footer = () => {
    return(
        <div className="Footer">
            {/* <img src={Instagram} className="Footer-Icons" alt="Instagram"/>
            <img src={Twitter} className="Footer-Icons" alt="Twitter"/> */}
            <a href="https://open.spotify.com/artist/6FR2ARlfDqNU7BMBaWjGZP?si=PWKSv6lXRqalW_vxZwdlqA">
            <img src={Spotify} className="Footer-Icons" alt="Spotify"/>
            </a>
        </div>
    );
}

export default Footer;