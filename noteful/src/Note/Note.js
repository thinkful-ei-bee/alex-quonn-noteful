import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Note extends Component {
  
  render() {
    
    return (
        <div>
            <h1>
            <Link to={'/note/'+ this.props.id}>  {this.props.name}  </Link> 
            </h1>
            <button>Delete</button>
            <p>{this.props.date}</p>
        </div>
    )
  }
}

export default Note;
