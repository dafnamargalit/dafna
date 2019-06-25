import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../media/gifs/projects.gif';
import fish from '../media/images/go-fish1.jpg';
import fmn from '../media/images/forgetmenot1.jpg';
import btt from '../media/images/battleship.jpg';
import click from '../media/writing/clik.png';
import guitarduino from '../media/images/guitarduino.jpg';

import './Projects.css'

const Projects = () => {
    return(
        <div className="Page">
        <div className="Merch-Header">
        <Link to="/folio">
        <div className="container">
        <img className="Merch-Video" src={projects} alt="projects" ></img>
        <div className="overlay">
                <div className="description">
                    Back to 'Folio
                </div>
            </div>
        </div>
        </Link>
        </div>
        <div className="Projects">
        <div className="container">
        <a href="https://github.com/dafnamargalit/go-fish">
        <img className="Merch-Video" src={fish} alt="fish" ></img>
        <div className="overlay">
                <div className="description">
                    Project Name: 
                    <br></br>
                    Go Fish 
                    <br></br>
                    Language: 
                    <br></br>
                    Python
                </div>
            </div>
        </a>
       
        </div>
        <div className="container">
        <a href="https://github.com/dafnamargalit/forgetmenot">
        <img className="Merch-Video" src={fmn} alt="fmn" ></img>
        <div className="overlay">
                <div className="description">
                    Project Name: 
                    <br></br>
                    Forget Me Not
                    <br></br>
                    Language: JavaScript
                </div>
            </div>
        </a>
       
        </div>
        <div className="container">
        <a href="https://github.com/dafnamargalit/battleship">
        <img className="Merch-Video" src={btt} alt="btt" ></img>
        <div className="overlay">
                <div className="description">
                    Project Name: 
                    <br></br>
                    Battleship
                    <br></br>
                    Language: C
                </div>
            </div>
        </a>
       
        </div>
        <div className="container">
        <a href="https://github.com/dafnamargalit/guitarduino-tuner">
        <img className="Merch-Video" src={guitarduino} alt="guitarduino" ></img>
        <div className="overlay">
                <div className="description">
                    Project Name: 
                    <br></br>
                    Guitarduino Tuner
                    <br></br>
                    Language: C
                </div>
            </div>
        </a>
       
        </div>
        </div>
        <div className="projects-click">
            <img className="pick" src={click} alt="click"></img>
        </div>
        </div>
    )
}

export default Projects;