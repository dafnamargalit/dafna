import React from 'react';
import './Footer.css';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Spotify from './spotify.svg';

const Footer = () => {
    return(
        <div className="Footer">
            <a href="https://instagram.com/dafna_margalit">
                <img src={Instagram} className="Footer-Icons" alt="Instagram"/>
            </a>
            <a href="https://open.spotify.com/artist/6FR2ARlfDqNU7BMBaWjGZP?si=PWKSv6lXRqalW_vxZwdlqA">
            <img src={Spotify} className="Footer-Icons" alt="Spotify"/>
            </a>
            <a href="https://twitter.com/dafnamargalit">
                <img src={Twitter} className="Footer-Icons" alt="Twitter"/>
            </a>
        </div>
    );
}

export default Footer;