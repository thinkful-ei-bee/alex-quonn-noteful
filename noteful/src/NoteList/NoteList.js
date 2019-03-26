import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from "../Note/Note";
 function NoteList  (props) {  
  console.log(props.notes);  
  return (
      <div>
        <ul>
        {props.notes.map(note => 
          <li>
          <Note id={note.id} name={note.name} content={note.content} date={note.modified} ></Note>
          </li>
)}
        </ul>
        
      </div>
    )
    
    }

export default NoteList;
