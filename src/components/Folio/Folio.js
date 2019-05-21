import React from 'react';	
	import ReactPlayer from 'react-player';
	import Navbar from '../Navbar';
	import Footer from '../Footer';
	import F from '../images/F.png';
	import O from './O.png';
	import L from './L.png';
	import I from './I.png';
	import apostrophe from './apostrophe.png';
	import portfolio from './port.png';
	
	import '../Ask/Ask.css';
	import './Folio.css';
	const Folio = () => {
	return(
	<div className="Folio">
	<div className="Folio-Navbar">
	<Navbar/>
	</div>
	{/* <div className="Ask-Content">
	This page is under construction.
	</div> */}
	<div className="Folio-A">
	<img src={apostrophe} className="Folio-Ap" alt="'"></img>
	</div>
	<div className="Folio-Title">
	<img src={F} className="Folio-F" alt="F"></img>
	<img src={O} className="Folio-O" alt="O"></img>
	<img src={L} className="Folio-Letters" alt="L"></img>
	<img src={I} className="Folio-Letters" alt="I"></img>
	<img src={O} className="Folio-O" alt="O"></img>
	</div>
	<img src={portfolio} className="Folio-parenth" alt="portfolio"/>
	<div className="Folio-Content">
	<div className="video">
	<ReactPlayer>
	
	</ReactPlayer>
	</div>
	{/* <p id="Folio-Text"><a> PROJECTS <br></br></a></p>
	<p id="Folio-Text"><a> RESUME <br></br></a></p>*/}
	</div>
	<Footer />
	</div>
	);
	}
	
	export default Folio;