import React from 'react';	
	import Navbar from '../Navbar';
	import Footer from '../Footer';
	import N from './N.png';
	import E from './E.png';
	import W from './W.png';
	import S from './S.png';
	import album from '../Landing/spirit.jpg';

	import './News.css';
	const News = () => {
	return(
	<div className="News">
	<Navbar/>
	<div className="News-Header">
		<img src={N} className='News-Letters-N' alt="N"/>
		<img src={E} className='News-Letters-E' alt="E"/>
		<img src={W} className='News-Letters-W' alt="W"/>
		<img src={S} className='News-Letters-S' alt="S"/>
	</div>
	This page is under construction.
	
	<div className="News-Footer">
	<Footer />
	</div>
	</div>
	);
	}
	export default News;