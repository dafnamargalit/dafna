import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../media/gifs/projects.gif';
import drum from '../media/images/drum.png';
import fmn from '../media/images/forgetmenot1.jpg';
import btt from '../media/images/battleship.jpg';
import click from '../media/writing/clik.png';
import guitarduino from '../media/images/guitarduino.jpg';
import otr from '../media/images/logo.png';
import './Projects.css'

const Projects = () => {
    return(
        <div className="Page">
        <div className="desktop">
        <div className="Projects-Header">
        <Link to="/folio">
        <div className="projects-container">
        <img className="projects-video" src={projects} alt="projects" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                    Back to 'Folio
                </div>
            </div>
        </div>
        </Link>
        </div>
        <div className="Projects">
        <div className="projects-container">
        <a href="https://www.hackster.io/313139/mini-electronic-drum-set-64a1fc?utm_campaign=new_respect_for_project&utm_medium=email&utm_source=hackster">
        <img className="projects-video" src={drum} alt="drum" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                    Language: 
                    C
                </div>
            </div>
        </a>
        <div className="Projects-description">
                   Mini Electronic Drum Set
        </div>
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/battleship">
        <img className="projects-video" src={btt} alt="btt" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                    Language: C
                </div>
            </div>
        </a>
        <div className="Projects-description">
                   Battleship
        </div>
       
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/forgetmenot">
        <img className="projects-video" src={fmn} alt="fmn" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                    Language: JavaScript
                </div>
            </div>
        </a>
        <div className="Projects-description">
                   ForgetMeNot IOS
        </div>
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/guitarduino-tuner">
        <img className="projects-video" src={guitarduino} alt="guitarduino" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                    Language: C
                </div>
        </div>
        </a>
        <div className="Projects-description">
                    Guitarduino Tuner
        </div>
       
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/on-the-rocks">
        <img className="projects-video" src={otr} alt="otr" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                    Language: JavaScript
                </div>
        </div>
        </a>
        <div className="Projects-description">
                    On the Rocks Website
        </div>
       
        </div>

        </div>
        <div className="projects-click">
            <img className="projects-click-size" src={click} alt="click"></img>
        </div>
        </div>
       
        <div className="mobile">
        <div className="Projects">

        <Link to="/folio">
        <div className="projects-container">
        <img className="projects-video" src={projects} alt="projects" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                    Back to 'Folio
                </div>
            </div>
        </div>
        </Link>

        <div className="projects-container">
        
        <a href="https://www.hackster.io/313139/mini-electronic-drum-set-64a1fc?utm_campaign=new_respect_for_project&utm_medium=email&utm_source=hackster">
        <img className="projects-video" src={drum} alt="drum" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                Project:  Electronic Drum Set
                    Language: 
                    C
                </div>
            </div>
        </a>
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/battleship">
        <img className="projects-video" src={btt} alt="btt" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                Project: Battleship
                    Language: C
                </div>
            </div>
        </a>
       
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/forgetmenot">
        <img className="projects-video" src={fmn} alt="fmn" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                Project: ForgetMeNot IOS
                    Language: JavaScript
                </div>
            </div>
        </a>
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/guitarduino-tuner">
        <img className="projects-video" src={guitarduino} alt="guitarduino" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                Project: Guitarduino Tuner
                    Language: C
                </div>
        </div>
        </a>
        </div>

        <div className="projects-container">
        <a href="https://github.com/dafnamargalit/on-the-rocks">
        <img className="projects-video" src={otr} alt="otr" ></img>
        <div className="projects-overlay">
                <div className="Projects-description">
                Project: On the Rocks Website
                    Language: Javascript
                </div>
        </div>
        </a>
        </div>

        </div>
        </div>
        </div>
    )
}

export default Projects;