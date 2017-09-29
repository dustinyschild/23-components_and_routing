const Note = require('./note.constructor');
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      noteContent: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({noteContent: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let newNote = new Note({
      content: event.target.children[0].value
    });
    this.props.App.setState(state => {
      return ({notes: [...state.notes, newNote]});
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.noteContent}
          type="text"
          size="20"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  App: PropTypes.object,
};

export default NoteCreateForm;
