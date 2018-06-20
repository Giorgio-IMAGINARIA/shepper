import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from "./components/appBar.component";

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar />
      <div className="App-spacer" />
      </div>
    );
  }
}

export default App;
