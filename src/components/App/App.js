import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './App.css';

// const Landing = React.lazy(() => import("../Landing"));
const NotFound = React.lazy(() => import("../NotFound"));
const Home = React.lazy(() => import("../Home"));
const About = React.lazy(() => import("../About"));
const Folio = React.lazy(() => import("../Folio"));
const News = React.lazy(() => import("../News"));
const Ask = React.lazy(() => import("../Ask"));
const Merch = React.lazy(() => import("../Merch"));
const Music = React.lazy(() => import("../Music"));
const Resume = React.lazy(() => import("../Resume"));
const Projects = React.lazy(() => import("../Projects"));
const Scavenger = React.lazy(() => import("../Scavenger"));
const Rules = React.lazy(() => import("../Rules"));
const ClueOne = React.lazy(() => import("../Clues/ClueOne"));
const ClueTwo = React.lazy(() => import("../Clues/ClueTwo"));
const ClueThree = React.lazy(() => import("../Clues/ClueThree"));
const ClueFour = React.lazy(() => import("../Clues/ClueFour"));
const ClueFive = React.lazy(() => import("../Clues/ClueFive"));
export default class App extends Component {
  render(){
  return (
  <React.Suspense fallback={
    <div className="App-Loader" id="App-Loader">
    <Loader 
    type="Audio"
    color="#f7d5e8"
    height="100"	
    width="100"
 />   
</div>
}>
 <Router>
      <div className='App'>
      <Route exact path='/' component={Home}/>
      {/* <Route path='/home' component={Home}/> */}
      <Route path='/about' component={About}/>
      <Route path='/folio' component={Folio}/>
      <Route path='/news' component={News}/>
      <Route path='/ask' component={Ask}/>
      <Route path='/merch' component={Merch}/>
      <Route path='/music' component={Music}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/scavenger-hunt' component={Scavenger}/>
      <Route path='/rules' component={Rules}/>
      <Route path='/clue1' component={ClueOne}/>
      <Route path='/clue2' component={ClueTwo}/>
      <Route path='/clue3' component={ClueThree}/>
      <Route path='/clue4' component={ClueFour}/>
      <Route path='/clue5' component={ClueFive}/>
      <Route path='*' component={NotFound} />
      </div>
    </Router>
</React.Suspense>
  );
  }
}


