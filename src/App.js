import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Hand from './Hand';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Hand />
      </div>
    );
  }
}

export default App;
