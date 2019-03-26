import React, { Component } from 'react';
import './App.css';
import {Note} from "./Note/Note";
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
        })
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
      <Route exact path='/folder/folder.id'
      render={(routeProps) => {
        console.log("x")
        const listNotes = this.state.notes.filter(note => note.id === routeProps.folder.id);
         return (<NoteList>
          notes = {listNotes};
        </NoteList>);
      }} />
                      
  
      </main>
      </div>
    );
  }
}

export default App;
