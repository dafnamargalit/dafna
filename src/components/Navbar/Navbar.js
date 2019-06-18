import React from 'react';
import {Link} from 'react-router-dom';

import D from '../media/letters/D-pink.png';
import A from '../media/letters/A-yellow.png';
import F from '../media/letters/F-blue.png';
import N from '../media/letters/N-green.png';
import AP from '../media/letters/A-pink.png';

import './Navbar.css';

const Navbar = () => {
    return(
        <div className="Navbar">
            <Link to='/home' style={{textDecoration:'none'}}>
                <img src={D} className='Letters-D' alt="D"/>
            </Link>
            <Link to="/about" style={{textDecoration:'none'}}>
                <img src={A} className='Letters-A' alt="A"/>
            </Link>
            <Link to="/folio" style={{textDecoration:'none'}}>
                <img src={F} className='Letters-F' alt="F"/>
            </Link>
            <Link to="/news" style={{textDecoration:'none'}}>
                <img src={N} className='Letters-N' alt="N"/>
            </Link>
            <Link to="/ask" style={{textDecoration:'none'}}>
                <img src={AP} className='Letters-A' alt="AP"/>
            </Link>
        </div>
    );

}

export default Navbar;