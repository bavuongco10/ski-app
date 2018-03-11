import React, { Component } from 'react';

import { Images } from '../../Themes';
import './App.css';
import BuildInfo from '../../Components/BuildInfo/BuildInfo.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Images.react_logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <BuildInfo />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to
        </p>
      </div>
    );
  }
}

export default App;
