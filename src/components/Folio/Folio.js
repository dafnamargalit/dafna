import React from 'react';	
	import Navbar from '../Navbar';
	import Footer from '../Footer';
	import F from '../media/letters/F-blue.png';
	import O from '../media/letters/O-blue.png';
	import L from '../media/letters/L-blue.png';
	import I from '../media/letters/I-blue.png';
	import apostrophe from '../media/letters/apostrophe.png';
	import portfolio from '../media/writing/port.png';
	import record from './gifs/record_player.gif';
	import merch from './gifs/merch.gif';
	import projects from './gifs/projects.gif';

	import '../Ask/Ask.css';
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
			<a className="circle" href="https://bonfire.com/dafna-valentine">
			<img className="Folio-Video" src={merch} alt="merch" ></img>
			</a>
			<a className="circle" href="https://github.com/dafnamargalit">
			<img className="Folio-Video" src={projects} alt="projects" ></img>
			</a>
			
			<div className="Folio-Footer">
				<Footer />
			</div>
		</div>
	</div>
	);
	}
	
	export default Folio;