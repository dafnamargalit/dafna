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
        <img className="projects-video" src={projects} alt="projects" ></img>
        <div className="projects-overlay">
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
        <img className="projects-video" src={fish} alt="fish" ></img>
        <div className="projects-overlay">
                <div className="description">
                    Language: 
                    Python
                </div>
            </div>
        </a>
        <div className="description">
                   Go Fish
        </div>
        </div>

        <div className="container">
        <a href="https://github.com/dafnamargalit/battleship">
        <img className="projects-video" src={btt} alt="btt" ></img>
        <div className="projects-overlay">
                <div className="description">
                    Language: C
                </div>
            </div>
        </a>
        <div className="description">
                   Battleship
        </div>
       
        </div>

        <div className="container">
        <a href="https://github.com/dafnamargalit/forgetmenot">
        <img className="projects-video" src={fmn} alt="fmn" ></img>
        <div className="projects-overlay">
                <div className="description">
                    Language: JavaScript
                </div>
            </div>
        </a>
        <div className="description">
                   ForgetMeNot IOS
        </div>
        </div>

        <div className="container">
        <a href="https://github.com/dafnamargalit/guitarduino-tuner">
        <img className="projects-video" src={guitarduino} alt="guitarduino" ></img>
        <div className="projects-overlay">
                <div className="description">
                    Language: C
                </div>
        </div>
        </a>
        <div className="description">
                    Guitarduino Tuner
        </div>
       
        </div>
        </div>
        <div className="projects-click">
            <img className="pick" src={click} alt="click"></img>
        </div>
        </div>
    )
}

export default Projects;