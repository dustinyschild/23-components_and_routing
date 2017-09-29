require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from './components/noteList';
import NoteCreateForm from './components/createNoteForm';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
      editNote: this.editNote.bind(this),
    };
  }

  editNote(updatedNote){
    console.log(updatedNote);
    this.setState(() => {
      this.state.notes.map(stateNote => {
        stateNote.id === updatedNote.id ? updatedNote : stateNote;
      });
    });
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <NoteCreateForm App={this.getApp()}/>
        <NoteList App={this.getApp()}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
