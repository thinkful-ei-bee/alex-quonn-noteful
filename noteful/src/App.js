import React, { Component } from 'react';
import './App.css';
import NoteDesc from "./NoteDesc/NoteDesc";
import NoteList from "./NoteList/NoteList";
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import AddFolderBtn from './AddFolderBtn/AddFolderBtn';
import AddNote from './AddNote/AddNote';
import FolderList from "./FolderList/Folderlist";
class App extends Component {
  constructor(props){
    super(props)
    this.state ={

      folders: [],
      notes: [],
      currentUrl: "https://localhost:3000/"
    }
  }

  render() {

      this.state =this.props.store;   
    
       
    
    return (
      <div className="App">
      
      <header>
        {
          <Link to="/">
          <h1>Noteful</h1>
          </Link>
      }
        </header>
        <Route exact path='/'
                   component={(props) => {
                    
                    return <FolderList folders={this.state.folders}></FolderList>
                   
                    }} 
      />
      
      
      <Route exact path='/'
                   component={(props) => {
                    return <NoteList notes={this.state.notes}></NoteList>
                    }} 
      />
        <aside>
        <nav>
      
          </nav>
        </aside>
      <main>

      <Route exact path='/folder/:folderId'
        component={(props) => {
        return <FolderList folders={this.state.folders}></FolderList>
          }} 
      />

       {/* Folders Path */}
      <Route exact path='/folder/:folderId'
        component={(props) => {
        const listNotes = this.state.notes.filter(note => note.folderId === props.match.params.folderId)
        return <NoteList notes={listNotes}></NoteList>
          }} 
      />


      {/* Notes Path */}
      <Route exact path='/note/:noteId'
                   component={(props) => {
                    const description = this.state.notes.filter(note => note.id === props.match.params.noteId)
                   return <NoteDesc note={description}>
                    
                   </NoteDesc>
                    }} 
      />

      {/* Add Folder Form Path */}
      <Route exact path='/addFolderBtn'
                   component={(props) => {
                   return <AddFolderBtn></AddFolderBtn>
                    }} 
      />
    {/* 
     */}
     {/* Add Note Form Path */}
     <Route exact path='/addNote'
                   component={(props) => {
                   return <AddNote></AddNote>
                    }} 
      />
      
      
    

      </main>
      </div>
    );
  }
}

export default App;
