import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NoteDesc extends Component {
  
  render() {
      const thisNote = this.props.note[0];
    return (
        <div>
            <h1>
            {thisNote.name} 
            </h1>
            <button>Delete</button>
            <p>{thisNote.modified}</p>
            <p>{thisNote.content}</p>
            <button>Back</button>
        </div>
    )
  }
}

export default NoteDesc;
