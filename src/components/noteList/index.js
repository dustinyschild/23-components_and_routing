import React from 'react';
import NoteItem from '../noteItem';
import Modal from '../modals/noNotes.modal';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    this.removeNote = this.removeNote.bind(this);
  }

  removeNote(note){
    this.props.App.setState(state => {
      return ({
        notes: state.notes.filter(stateNote => {
          return stateNote.id !== note.id;
        })
      });
    });
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.App.state.notes.length !== 0 ?
            this.props.App.state.notes.map(note => (<NoteItem note={note} key={note.id} removeNote={this.removeNote}/>)) :
            <Modal />
          }
        </ul>
      </div>
    );
  }
}

NoteList.propTypes = {
  App: PropTypes.object,
};

export default NoteList;
