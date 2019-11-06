import React from 'react';	

import Navbar from '../Navbar';
import Footer from '../Footer';

import N from '../media/letters/N-green.png';
import E from '../media/letters/E-green.png';
import W from '../media/letters/W-green.png';
import S from '../media/letters/S-green.png';
import spirit from '../media/album-covers/spirit.jpg';
import swimming from '../media/album-covers/swimming.jpg';
import valentine from '../media/album-covers/valentine.jpg';
import dufhif from '../media/album-covers/do.jpg';
import bymyself from '../media/album-covers/bymeself.jpg';
import dove from '../media/album-covers/dove.jpg';
// import september from './dates/sept20.png';
import nov5 from './dates/nov5.png';
// import oct5 from './dates/oct5.png';
import november from './dates/nov22.png';
import december from './dates/dec13.png';


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
			<div className="News-Releases">
				<div className="News-Titles">
					RELEASES
				</div>
				<div className="News-List">
				<div className="News-Recent">
					<img src={bymyself} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						Latest Release: by myself (single)
						<div className="News-Description">
							Released 10/02/19
							<br></br>
							<a href="https://dafna.fanlink.to/by-myself">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={dufhif} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						do u feel how i feel ? (single)
						<div className="News-Description">
							Released 8/15/19
							<br></br>
							<a href="https://dafna.fanlink.to/dufhif">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={swimming} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						swimming (single)
						<div className="News-Description">
							Released 7/15/19
							<br></br>
							<a href="https://dafna.fanlink.to/swimming">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={spirit} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						spirit ep (3 songs)
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
				No shows lined up as of now!
				{/* <div className="News-Upcoming">
					<img src={nov5} className="News-Calendar" alt="nov5"></img>
					<div className="News-Head"> 
					<a href="https://www.eventbrite.com/e/cu-boulder-homecoming-concert-w-goth-babe-johnny-utah-tickets-75721568249">
					Dafna opening for Goth Babe & Johnny Utah
					</a>
					<div className="News-Description">11/05/19 at 7:30pm</div>
					<div className="News-Description">
					<a href="https://www.google.com/maps/place/Glenn+Miller+Ballroom,+Boulder,+CO+80309/data=!4m2!3m1!1s0x876bec3406141697:0xac945811f87cecc3?sa=X&ved=2ahUKEwiiuZiVhK7lAhWUup4KHbPFDsAQ8gEwAHoECAoQAQ">
							Glenn Miller Ballroom, 
							<br></br>
							1669 Euclid Ave,
							<br></br>
							Boulder, CO 80302
						</a>
					</div>
					</div>
				</div> */}
				</div>
			</div>
		</div>
		<div className="News-Mobile">
			<div className="News-M-Titles">
				RELEASES
			</div>
				<div className="News-List">
				<div className="News-Recent">
					<img src={bymyself} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						by myself (single)
						<div className="News-Description">
							Released 10/02/19
							<br></br>
							<a href="https://dafna.fanlink.to/by-myself">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={dufhif} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						do u feel how i feel ? (single)
						<div className="News-Description">
							Released 8/15/19
							<br></br>
							<a href="https://dafna.fanlink.to/dufhif">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={swimming} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						swimming (single)
						<div className="News-Description">
							Released 7/15/19
							<br></br>
							<a href="https://dafna.fanlink.to/swimming">
								Click Here to Listen
							</a>
						</div>
					</div>
				</div>
				<div className="News-Recent">
					<img src={spirit} className="News-Album" alt="spirit"></img>
					<div className="News-Head">
						spirit ep (3 songs)
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
			<div className="News-M-Titles">
				SHOWS
			</div>
			<div className="News-List-2">
			No shows lined up as of now!
			{/* <div className="News-Upcoming">
					<img src={nov5} className="News-Calendar" alt="nov5"></img>
					<div className="News-Head"> 
					<a href="https://www.eventbrite.com/e/cu-boulder-homecoming-concert-w-goth-babe-johnny-utah-tickets-75721568249">
					Dafna opening for Goth Babe & Johnny Utah
					</a>
					<div className="News-Description">11/05/19 at 7:30pm (Doors 6:30pm) </div>
					<div className="News-Description">
						<a href="https://www.google.com/maps/place/Glenn+Miller+Ballroom,+Boulder,+CO+80309/data=!4m2!3m1!1s0x876bec3406141697:0xac945811f87cecc3?sa=X&ved=2ahUKEwiiuZiVhK7lAhWUup4KHbPFDsAQ8gEwAHoECAoQAQ">
							Glenn Miller Ballroom, 
							<br></br>
							1669 Euclid Ave,
							<br></br>
							Boulder, CO 80302
						</a>
					</div>
					
					</div>
				</div> */}
				</div>
		</div>
		<div className="News-Footer">
			<Footer />
		</div>
	</div>
	);
	}
	export default News;


 

