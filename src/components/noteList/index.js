import React from 'react';
import NoteItem from '../noteItem';
import Modal from '../modals/noNotes.modal';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  constructor(props){
    super(props);

    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  updateNote(note){
    this.props.App.setState(state => {
      return ({
        notes: state.notes.map(_note => {
          return _note.id === note.id ? note : _note;
        })
      });
    });
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

  showEdit(note){
    this.props.App.setState(state => {
      return ({
        notes: state.notes.map(_note => {
          console.log(note.editing);
          return _note.id === note.id ?
            note :
            _note;
        })
      });
    });
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.App.state.notes.length !== 0 ?
            this.props.App.state.notes.map(note => (
              <NoteItem
                note={note}
                key={note.id}
                updateNote={this.updateNote}
                removeNote={this.removeNote}
                showEdit={this.showEdit}
              />
            ), this) :
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
