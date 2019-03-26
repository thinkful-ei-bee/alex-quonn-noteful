import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from "../Note/Note";

 function FolderList  (props) {  
     

    return (
        <div>
          
          {props.folders.map(folder => { 

           return  <div>
               <Link to={"/folder/" + folder.id} >
    <p>{folder.name}</p>
    </Link>
           </div>
             
            
          }
  )}
          
          <Link to="/addFolderBtn">Add Folder</Link>
        </div>
      )
        }



  export default FolderList;
