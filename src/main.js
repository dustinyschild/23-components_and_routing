require('./style/main.scss');
//new branch ya'll
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
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  componentDidUpdate(){
    console.log(this.state.notes);
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
