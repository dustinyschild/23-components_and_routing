import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    console.log('Update Item State',this.props.App.state);
  }

  render(){
    return(
      <li key={this.props.note.id}>
        {this.props.note.content}

        <button>Delete</button>
      </li>
    )
  }
}

export default NoteItem;
