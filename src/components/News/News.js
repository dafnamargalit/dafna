import React from 'react';	

import Navbar from '../Navbar';
import Footer from '../Footer';

import N from './N.png';
import E from './E.png';
import W from './W.png';
import S from './S.png';
import spirit from '../Landing/spirit.jpg';
import valentine from './valentine.jpg';
import dove from './dove.jpg';
import august from './aug25.png';
import october from './oct02.png';
import november from './nov22.png';
import december from './dec13.png';

import './News.css';

const slideImages = [
	spirit,
	valentine,
	dove
  ];
   
  const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true
  }

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
			<div className="News-Releases">
				<div className="News-Titles">
					RELEASES
				</div>
				<div className="News-List">
				<div className="News-Recent">
					<img src={spirit} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						Latest Release: spirit ep
						<div className="News-Description">
							Released 5/23/19
							<br></br>
							<a href="https://dafna.fanlink.to/spirit">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={valentine} className="News-Album" alt="valentine"></img>
					<div className="News-Head">
						valentine (single)
						<div className="News-Description">
							Released 2/7/19
							<br></br>
							<a href="https://dafna.fanlink.to/valentine">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={dove} className="News-Album" alt="dove"></img>
					<div className="News-Head">
						if you're a dove (single)
						<div className="News-Description">
							Released 1/27/19
							<br></br>
							<a href="https://dafna.fanlink.to/dove">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				
				</div>
			</div>
			<div className="News-Shows">
				<div className="News-Titles">
					SHOWS
				</div>
				<div className="News-List">
				<div className="News-Upcoming">
					<img src={august} className="News-Calendar" alt="aug25"></img>
					<div className="News-Head"> 
					Dafna at The Laughing Goat
					<div className="News-Description">8/25/19 at 8pm</div>
					<div className="News-Description">
						<a href="https://goo.gl/maps/6qbPLYWCkEt">
							1709 Pearl St.
							<br></br>Boulder CO
							80302
						</a>
					</div>
					</div>
				</div>
				<div className="News-Upcoming">
					<img src={october} className="News-Calendar" alt="oct02"></img>
					<div className="News-Head"> 
					Dafna at The Fox Theatre
					<div className="News-Description">10/02/19 at 8pm</div>
					<div className="News-Description">
						<a href="https://foxtheatre.com">
							Click Here for more information
						</a>
					</div>
					</div>
				</div>
				<div className="News-Upcoming">
					<img src={november} className="News-Calendar" alt="nov22"></img>
					<div className="News-Head"> 
					Dafna at The Laughing Goat
					<div className="News-Description">11/22/19 at 8pm</div>
					<div className="News-Description">
						<a href="https://goo.gl/maps/6qbPLYWCkEt">
							1709 Pearl St.
							<br></br>Boulder CO
							80302
						</a>
					</div>
					</div>
				</div>
				<div className="News-Upcoming">
					<img src={december} className="News-Calendar" alt="dec13"></img>
					<div className="News-Head"> 
					Dafna at The Laughing Goat
					<div className="News-Description">12/13/19 at 8pm</div>
					<div className="News-Description">
						<a href="https://goo.gl/maps/6qbPLYWCkEt">
							1709 Pearl St.
							<br></br>Boulder CO
							80302
						</a>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		<div className="News-Mobile">
			<div className="News-M-Releases">
				RELEASES
			</div>
			

		</div>
		<div className="News-Footer">
			<Footer />
		</div>
	</div>
	);
	}
	export default News;


 

