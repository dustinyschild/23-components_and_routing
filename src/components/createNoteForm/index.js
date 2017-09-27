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
  }

  handleChange(event){
    console.log('change');a
    this.setState({noteContent: event.target.value});
  }

  render(){
    return(
      <form>
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
