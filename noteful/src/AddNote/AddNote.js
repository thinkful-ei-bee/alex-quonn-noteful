import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from "../Note/Note";
class AddNote extends Component {
  render(){
    return (
      <div>
        <h1>Create A Note</h1>
        <form >
            <label htmlFor="folderName">Name</label>
            <input id="folderName" name="folderName"></input>
            <label htmlFor="noteContent">Content</label>
            <input id="noteContent" name="noteContent"></input>
            <label htmlFor="folder">Folder</label>
            <input id="folder" name="folder"></input>
            <button>Add Note</button>
            <button>Back</button>
        </form>  
      </div>
    )
  }
    }

export default AddNote;
