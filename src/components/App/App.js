import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Loader from 'react-loader-spinner';

import Landing from '../Landing';
import Home from '../Home';
import About from '../About';
import Folio from '../Folio';
import News from '../News';
import Ask from '../Ask';
import Merch from '../Merch';
import Music from '../Music';
import Projects from '../Projects';

import './App.css';


export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     display: 'block'
  //   };
  // }
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  // componentDidMount(){
  //   this.authenticate().then(() => {
  //     const loader = this.state;
  //     if(loader.loading === true){
  //       setTimeout(() => {
  //         // remove from DOM
  //         loader.loading = false;
  //         loader.display = 'none';
  //       }, 2000)
  //     }
  //   })
  // }
  componentDidMount(){
  this.authenticate().then(() => {
    const ele = document.getElementsByClassName('App-Loader')
    if(ele){
      // fade out
      // ele.classList.add('available')
      console.log(ele);
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
  })
}
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
      <Route path='/merch' component={Merch}/>
      <Route path='/music' component={Music}/>
      <Route path='/projects' component={Projects}/>
      </div>
    </Router>
  );
  }
}


