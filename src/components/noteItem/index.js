import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(){
    console.log('Update Item State',this.props.App.state);
  }

  handleClick(event){
    this.props.App.setState(state => {
      return ({
        notes: state.notes.filter(note => {
          //return note.id !== /*note id*/;
        })
      })
    })
  }

  render(){
    return(
      <li key={this.props.note.id}>
        {this.props.note.content}

        <button onClick={this.handleClick}>Delete</button>
      </li>
    )
  }
}

export default NoteItem;
