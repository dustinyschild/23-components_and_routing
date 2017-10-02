import React from 'react';
import NoteItem from '../noteItem';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    this.removeNote = this.removeNote.bind(this);
  }

  removeNote(note){
    this.props.App.setState(state => {
      return ({
        notes: this.props.App.state.notes.filter(stateNote => {
          return stateNote.id !== note.id;
        });
      });
    });
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.App.state.notes.length !== 0 ?
            this.props.App.state.notes.map(note => (<NoteItem note={note} key={note.id} removeNote={this.removeNote}/>)) :
            <p>No Notes Yet!</p>
          }
        </ul>
      </div>
    );
  }
}

export default NoteList;
