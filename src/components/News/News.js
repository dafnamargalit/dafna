import React from 'react';	
import Iframe from 'react-iframe';
import Navbar from '../Navbar';
import Footer from '../Footer';

import N from '../media/letters/N-green.png';
import E from '../media/letters/E-green.png';
import W from '../media/letters/W-green.png';
import S from '../media/letters/S-green.png';

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
		<div className="News-Content">
			<div className="Row-1">
				<Iframe className="News-Embed" url="https://fortheloveofbands.com/2020/01/18/dafnas-by-myself-is-your-comfort-blanket-for-loneliness/"
					width="500px"
					height="500px"
				/>
				<Iframe className="News-Embed" url="https://comeherefloyd.com/dafna-peta%c2%a5an-dakota-stephen-artemis-jr-lunir/"
					width="500px"
					height="500px"
				/>

			<Iframe className="News-Embed" url="http://cravethesound.com/interviews-1/dafna"
					width="500px"
					height="500px"
				/>
			</div>
			<div className="Row-2">
			<Iframe className="News-Embed" url="https://www.anrfactory.com/dafna-if-youre-a-dove-a-hypnotic-blend-of-folk-minimalist-electronic-pop/"
					width="500px"
					height="500px"
				/>
				<Iframe className="News-Embed" url="https://www.eartothegroundmusic.co/2019/09/06/singer-songwriters-to-steal-your-heart-this-weekend/"
					width="500px"
					height="500px"
				/>
							<Iframe className="News-Embed" url="http://cravethesound.com/reviews/2019/10/9/dafna-concert-review"
					width="500px"
					height="500px"
				/>
			</div>
		</div>
		<div className="News-Footer">
			<Footer />
		</div>
	</div>
	);
	}
	export default News;


 

