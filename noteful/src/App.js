import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/" >
          <h1>Noteful</h1>
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
