const Note = require('./note.constructor');
import React from 'react';
import ReactDOM from 'react-dom';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      noteContent: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    console.log('change');
    this.setState({noteContent: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event.target.children[0].value);

    let newNote = new Note({
      content: event.target.children[0].value
    })
    console.log(newNote);
    this.props.App.setState(state => {
      return ({notes: [...state.notes, newNote]})
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
        value={this.noteContent}
        type="text"
        onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default NoteCreateForm;
