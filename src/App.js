import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from "./components/appBar.component";
import StateCurrentMissionCardComponent from "./components/stateCurrentMissionCard.component";

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar />
      <div className="App-spacer" />

<div className="main-wrapper">

      <div className="card-wrapper">
      <StateCurrentMissionCardComponent />
      </div>
  </div>



      </div>
    );
  }
}

export default App;
