import React, { Component } from 'react';
import './App.css';
import NoteDesc from "./NoteDesc/NoteDesc";
import NoteList from "./NoteList/NoteList";
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      folders: [],
      notes: []
    }
  }

  render() {
    this.state =this.props.store;
    console.log(this.state.folders);

    return (
      <div className="App">
      <header>
        {
          <Link to="/">
          <h1>Noteful</h1>
          </Link>
      }
        </header>
        <aside>
        <nav>
        {this.state.folders.map(folder => {
         return <Link to={"/folder/" + folder.id} >
         <p>{folder.name}</p>
        </Link>
       })}
            
          </nav>
        </aside>
      <main>

      <Route exact path='/folder/:folderId'
        component={(props) => {
        const listNotes = this.state.notes.filter(note => note.folderId === props.match.params.folderId)
        return <NoteList notes={listNotes}></NoteList>
          }} 
      />

      <Route exact path='/note/:noteId'
                   component={(props) => {
                    const description = this.state.notes.filter(note => note.id === props.match.params.noteId)
                   return <NoteDesc note={description}>
                    
                   </NoteDesc>
                    }} 
      />

      </main>
      </div>
    );
  }
}

export default App;
