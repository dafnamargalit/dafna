import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../media/gifs/projects.gif';
import fish from '../media/images/go-fish1.jpg';

import './Projects.css'

const Projects = () => {
    return(
        <div className="Merch">
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
                    Language: Python
                </div>
            </div>
        </a>
       
        </div>
        <div className="container">
        <a href="https://github.com/dafnamargalit/go-fish">
        <img className="Merch-Video" src={fish} alt="fish" ></img>
        <div className="overlay">
                <div className="description">
                    Project Name: 
                    <br></br>
                    Go Fish 
                    <br></br>
                    Language: Python
                </div>
            </div>
        </a>
       
        </div>
        </div>
        </div>
    )
}

export default Projects;