import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import F from '../images/F.png';
import O from './O.png';
import L from './L.png';
import I from './I.png';
import apostrophe from './apostrophe.png';

import './Folio.css';
const Folio = () => {
    return(
     <div className="Folio">
      <div className="Folio-Navbar">
     <Navbar/>
     </div>
     <div className="Folio-A">
         <img src={apostrophe} className="Folio-Ap" alt="'"></img>
     </div>
    <div className="Folio-Title">
        <img src={F} className="Folio-F" alt="F"></img>
        <img src={O} className="Folio-Letters" alt="O"></img>
        <img src={L} className="Folio-Letters" alt="L"></img>
        <img src={I} className="Folio-Letters" alt="I"></img>
        <img src={O} className="Folio-Letters" alt="O"></img>
    </div>
    <div className="Folio-Content">
        <p id="Folio-Text"><a> MUSIC <br></br></a></p>
        <p id="Folio-Text"><a> MERCH <br></br></a></p>
        <p id="Folio-Text"><a> PROJECTS <br></br></a></p>
        <p id="Folio-Text"><a> RESUME <br></br></a></p>
    </div>
        <Footer />
    </div>
    );

}

export default Folio;