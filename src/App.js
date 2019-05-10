import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={require("./Images/spirit.jpg")} className="Background"/>
        <img src={require("./Images/spirit.jpg")} className="resize"/>
        <div className="content">
          {/* <p className="text">Go Pre-Order my new EP out May 23rd!</p> */}
            <a href="https://distrokid.com/hyperfollow/dafna/spirit-2" className="button">Pre-Order my new EP out May 23rd!</a>
        </div>
    </div>
  );
}

export default App;
