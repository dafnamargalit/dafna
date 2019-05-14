import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer';

import D from '../images/D.png';
import A from '../images/A.png';
import F from '../images/F.png';
import N from '../images/N.png';
import AP from '../images/AP.png';
import click from '../images/click.png';

import './Home.css';

const Home = () => {
return(
    <div className='Home'>
      <img src={click} className='Home-Click' alt="click"/>
     <img src={D} className='Home-Letters-D' alt="D"/>
     <Link to="/about" style={{textDecoration:'none'}}>
        <img src={A} className='Home-Letters-A' alt="A"/>
     </Link>
     <Link to="/folio" style={{textDecoration:'none'}}>
        <img src={F} className='Home-Letters-F' alt="F"/>
     </Link>
     <Link to="/news" style={{textDecoration:'none'}}>
        <img src={N} className='Home-Letters-N' alt="N"/>
     </Link>
     <Link to="/ask" style={{textDecoration:'none'}}>
        <img src={AP} className='Home-Letters-A' alt="AP"/>
     </Link>
     <div className="Home-Footer">
     <Footer/>
     </div>
    </div>

);
}

export default Home;