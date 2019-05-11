import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from '../Landing';
import Home from '../Home';
import About from '../About';
import Folio from '../Folio';
import News from '../News';
import Ask from '../Ask';

import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
      <div className='App'>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/folio' component={Folio}/>
      <Route path='/news' component={News}/>
      <Route path='/ask' component={Ask}/>
      </div>
    </Router>
  );
  }
}

export default App;
