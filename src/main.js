require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import NoteCreateForm from './components/createNoteForm';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      notes: [],
    }
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  componentDidUpdate(){
    console.log(this.state.notes);
  }

  render(){
    return (
      <div>
        <NoteCreateForm App={this.getApp()}/>

      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
