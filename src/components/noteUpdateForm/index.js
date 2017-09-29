import React from 'react';
import PropTypes from 'prop-types';

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);
    console.log('UpdateFormProps', props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({text: event.target.value});
  }

  render(){
    return(
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.updateNote(this.state.text);
          }}
        >
          Submit
        </button>
        <button

        >
          Cancel
        </button>
      </div>
    );
  }
}

NoteUpdateForm.propTypes = {
  note: PropTypes.object,
  updateNote: PropTypes.func,
};

export default NoteUpdateForm;
