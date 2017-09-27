import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li key={this.props.note.id}>
        {this.props.note.content}
      </li>
    )
  }
}

export default NoteItem;
