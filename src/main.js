require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import NoteCreateForm from './components/createNoteForm';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      notes: [],
      noteContent: '',
    }

    this.app = {
      state: this.state,
      setState: this.setState.bind(this),
      content: this.state.noteContent,
    }
  }

  render(){
    return (
      <div>
        <NoteCreateForm App={this.app}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
