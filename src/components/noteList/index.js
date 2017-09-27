import React from 'react';
import ReactDOM from 'react-dom';
import NoteItem from '../noteItem';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('List Props',props);
  }

  componentDidUpdate(){
    console.log('Updating list', this.props.App.state.notes);
  }
  render(){
    return(
      <div>
        <ul>
          {this.props.App.state.notes ?
            this.props.App.state.notes.map(note => {
            return (
              <NoteItem note={note} key={note.id}/>
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
