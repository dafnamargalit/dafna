import React from 'react';	
// import Mailchimp from 'react-mailchimp-form';

import Navbar from '../Navbar';
import Footer from '../Footer';
import './NotFound.css';
	
const NotFound = () => {
	return(
<div className="NotFound">
<div className="NotFound-Navbar">
<Navbar/>
</div>
<header className="NotFound-Header">

</header>


<div className="NotFound-Content">
<p>
I'm sorry! The page you're looking for doesn't exist :-/
</p>
</div>
	<div className="NotFound-Footer">
	<Footer />
	</div>
	</div>
	);
	}

export default NotFound;
