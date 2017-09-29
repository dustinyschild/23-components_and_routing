import React from 'react';
import PropTypes from 'prop-types';
import NoteUpdateForm from '../noteUpdateForm';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    console.log('item props', props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newContent){
    this.props.updateNote({
      id: this.props.note.id,
      content: newContent,
      editing: false,
      completed: this.props.note.completed,
    });
  }

  render(){
    return(
      <li
        key={this.props.note.id}
        onDoubleClick={() => {
          this.props.showEdit({
            id: this.props.note.id,
            content: this.props.note.content,
            editing: this.props.note.edititng ? !this.props.note.editing : !this.props.note.editing,
            completed: this.props.note.completed,
          });
        }}
      >
        {this.props.note.content}
        <button onClick={() => {this.props.removeNote(this.props.note);}}>
          Delete
        </button>
        {
          this.props.note.editing ?
            <NoteUpdateForm
              note={this.props.note}
              updateNote={this.handleSubmit}
            /> :
            console.log('Update Note Hidden')
        }
      </li>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  updateNote: PropTypes.func,
  removeNote: PropTypes.func,
  showEdit: PropTypes.func,
};

export default NoteItem;
