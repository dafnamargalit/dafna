import React from 'react';	
import {Link} from 'react-router-dom';

	import Navbar from '../Navbar';
	import Footer from '../Footer';
	import F from '../media/letters/F-blue.png';
	import O from '../media/letters/O-blue.png';
	import L from '../media/letters/L-blue.png';
	import I from '../media/letters/I-blue.png';
	import apostrophe from '../media/letters/apostrophe.png';
	import portfolio from '../media/writing/port.png';
	import record from '../media/gifs/record_player.gif';
	import merch from '../media/gifs/merch.gif';
	import projects from '../media/gifs/projects.gif';
	import '../Ask/Ask.css';
	import './Folio.css';
	const Folio = () => {

	return(
	<div className="Folio">
		<div className="About-Navbar">
		<Navbar/>
		</div>
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
			<img className="Folio-Video" src={record} alt="record player" ></img>
			</a>
			<a className="circle" href="https://www.bonfire.com/store/dafna/">
			<img className="Folio-Video" src={merch} alt="merch" ></img>
			</a>

			<Link to="/projects" style={{textDecoration:'none'}}>
			<img className="Folio-Video" src={projects} alt="projects" ></img>
			</Link>
		</div>
		<Footer />
	</div>
	);
	}
	
	export default Folio;