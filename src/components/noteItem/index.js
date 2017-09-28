import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    console.log('item props', props);
  }

  render(){
    return(
      <li key={this.props.note.id}>
        {this.props.note.content}
        <button onClick={() => {this.props.removeNote(this.props.note)}}>Delete</button>
      </li>
    )
  }
}

export default NoteItem;
