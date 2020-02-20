import React from 'react';
import './Footer.css';
import Instagram from './icons/instagram.svg';
import Twitter from './icons/twitter.svg';
import Spotify from './icons/spotify.svg';
import GitHub from './icons/github.svg';

const Footer = () => {
    return(
        <div className="Footer">
            <a href="https://instagram.com/dafnamusic">
                <img src={Instagram} className="Footer-Icons" alt="Instagram"/>
            </a>
            <a href="https://open.spotify.com/artist/6FR2ARlfDqNU7BMBaWjGZP?si=PWKSv6lXRqalW_vxZwdlqA">
            <img src={Spotify} className="Footer-Icons" alt="Spotify"/>
            </a>
            <a href="https://twitter.com/dafnamusic">
                <img src={Twitter} className="Footer-Icons" alt="Twitter"/>
            </a>
            <a href="https://github.com/dafnamargalit">
                <img src={GitHub} className="Footer-Icons" alt="GitHub"/>
            </a>
        </div>
    );
}

export default Footer;