import React from 'react';	
import Navbar from '../Navbar';
import Footer from '../Footer';
import A from './A.png';
import S from './pS.png';
import K from './K.png';
import './Ask.css';
	
const Ask = () => {
	return(
	<div className="Ask">
	<div className="Ask-Navbar">
<Navbar/>
</div>
<header className="Ask-Header">
<img src={A} className="Ask-A" alt="a"/>
<img src={S} className="Ask-S" alt="s"/>
<img src={K} className="Ask-K" alt="k"/>
</header>
	<div className="Ask-Footer">
	<Footer />
	</div>
	</div>
	);
	}

export default Ask;
