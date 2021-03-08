import React, {Component} from 'react';	
import {Link} from 'react-router-dom';
import Footer from '../Footer';
	
import D from '../media/letters/D-pink.png';
import A from '../media/letters/A-yellow.png';
import F from '../media/letters/F-blue.png';
import N from '../media/letters/N-green.png';
import AP from '../media/letters/A-pink.png';
import click from '../media/writing/click.png';
import here from '../media/writing/here.png';
import './Home.css';
import Mail from "../Mail/Mail";

// import MailchimpSubscribe from "react-mailchimp-subscribe";

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			modal: false
		}
	}

	openModal = () => {
		this.setState({
			modal: !this.state.modal
		})
		localStorage.setItem('seen', true);
	}


	render(){

		return(
			<div className='Home'>
			<div className='Home-Top'>
			{/* <Link to="/scavenger-hunt" className="Scavenge">
				CLICK HERE TO PLAY THE SCAVENGER HUNT
			</Link> */}
			<p className="Scavenge" onClick={this.openModal}>JOIN MY MAILING LIST</p>
			</div>
			<div className="Home-Middle">
			<Mail className="modal" onClose={this.openModal} show={this.state.modal}></Mail>
				<img src={click} className='Home-Click' alt="click"/>
				<img src={here} className="Home-Here" alt="you are here"></img>
				<Link to="/" style={{textDecoration:'none'}}>
				<img src={D} className='Home-Letters-D' alt="D"/>
				</Link>
				<Link to="/about" style={{textDecoration:'none'}}>
				<img src={A} className='Home-Letters-A' alt="A"/>
				</Link>
				<Link to="/folio" style={{textDecoration:'none'}}>
				<img src={F} className='Home-Letters-F' alt="F"/>
				</Link>
				<Link to="/news" style={{textDecoration:'none'}}>
				<img src={N} className='Home-Letters-N' alt="N"/>
				</Link>
				<Link to="/ask" style={{textDecoration:'none'}}>
				<img src={AP} className='Home-Letters-A' alt="AP"/>
				</Link>
			</div>
			<div className="Home-Footer">
			<Footer/>
			</div>
			</div>
			
		);
	}
}

