import React, { Component } from 'react';

class NoteDesc extends Component {
  
  render() {
      const thisNote = this.props.note[0];
      console.log(this.props.note[0].content)
    return (
        <div>
            <p>{thisNote.content}</p>
        </div>
    )
  }
}

export default NoteDesc;
