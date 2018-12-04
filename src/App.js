import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <div className="hand">
          <img
            aria-hidden="true"
            src="/hand.png"
            srcSet="/hand.png 1x, /hand@2x.png 2x"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default App;
