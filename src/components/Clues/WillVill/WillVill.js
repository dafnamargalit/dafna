import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Weast from './weast.jpg';

import './WillVill.css'

class WillVill extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: false,
            input: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }

    handleChange(event) {
        this.setState( {input: event.target.value} );
      }
      
    keyPressed(event) {
        if (event.key === "Enter") {
          if(this.state.input.toUpperCase() === 'why'.toUpperCase()){
              this.setState({location: true})
          }
        }
    }

    render(){
        return(
            <div className="WillVill">
            <div className = "clue-top">
                <Link to="/scavenger-hunt" className="ClueBack">
                <div className="ClueBack">
                <i className="clue-arrow clue-left"></i>
                BACK TO HUNT</div>
                </Link>
                <div className="ClueHeading">LOCATION</div>
            </div>
            <div className = "clue-box">
                <div className="clue-text">
                    {this.state.location ? (<div className="location-blocker"><img src={Weast} className="image" alt="weast"/></div>) : (<div className="location-blocker">
                        <div className="hide-text">
                        To unlock the next location, type in the most used word in my song "<a href="https://genius.com/Dafna-let-u-go-lyrics" className="link">let u go</a>":
                        </div>
                        <input type="password" className="text-box" onChange={this.handleChange} onKeyPress={this.keyPressed} value={this.state.input}>
                        </input>
                    </div>)}
                <b><a href="https://link.tree/dafnamusic" style={{textDecoration:'none', color:'pink'}}>click here to pre-save I LOVE YOU the album</a></b>
                </div>
            </div>
            </div>
        );
    }
}

export default WillVill;