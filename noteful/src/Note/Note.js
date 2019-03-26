import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Note extends Component {
  
  render() {
    return (
        <div>
            <header>
          <Link to="/" >
          <h1>Noteful</h1>
          </Link>
        </header>
            <button></button>
            <p></p>
        </div>
    )
  }
}

export default Note;
