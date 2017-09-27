import React from 'react';
import ReactDOM from 'react-dom';
import NoteItem from '../noteItem';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    this.getApp = this.getApp.bind(this);
  }

  getApp(){
    return {
      state: this.props.App.state,
      setState: this.props.App.setState,
    }
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.App.state.notes.length !== 0 ?
            this.props.App.state.notes.map(note => {
            return (
              <NoteItem note={note} key={note.id} App={this.getApp()}/>
          )
          }) :
          <li>No Notes Yet!</li>

        }
        </ul>
      </div>
    )
  }
}

export default NoteList;
