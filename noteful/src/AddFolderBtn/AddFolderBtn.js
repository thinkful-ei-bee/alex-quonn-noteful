import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from "../Note/Note";
class AddFolderBtn extends Component {
  render(){
    return (
      <div>
        <h1>Create A Folder</h1>
        <form >
            <label htmlFor="folderName">Name</label>
            <input id="folderName" name="folderName"></input>
            <button>Add Folder</button>
        </form>  
        {console.log(this.props)}
        <button>Back</button>
      </div>
    )
  }
    }

    // AddFolderBtn.defaultProps = {
    //   history: {
    //     goBack: () => {}
    //   }
    // }

export default AddFolderBtn;
