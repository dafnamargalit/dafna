import React from 'react';	
	import Navbar from '../Navbar';
	import Footer from '../Footer';
	import F from '../images/F.png';
	import O from './O.png';
	import L from './L.png';
	import I from './I.png';
	import apostrophe from './apostrophe.png';
	import portfolio from './port.png';
	import record from './record_player.gif';
	import merch from './merch.gif';
	import projects from './projects.gif';

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
	<a className="circle" href="https://open.spotify.com/artist/6FR2ARlfDqNU7BMBaWjGZP?si=DS6OPf6fQQOned7Nbz4HrQ">
	<img className="video" src={record} alt="record player" ></img>
	</a>
	<a className="circle" href="https://bonfire.com/dafna-valentine">
	<img className="video" src={merch} alt="merch" ></img>
	</a>
	<a className="circle" href="https://github.com/dafnamargalit">
	<img className="video" src={projects} alt="projects" ></img>
	</a>
	{/* <p id="Folio-Text"><a> PROJECTS <br></br></a></p>
	<p id="Folio-Text"><a> RESUME <br></br></a></p>*/}
	</div>
	<Footer className="footer" />
	</div>
	);
	}
	
	export default Folio;