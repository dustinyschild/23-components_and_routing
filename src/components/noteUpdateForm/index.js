import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);
    console.log('UpdateFormProps', props);
  }

  render(){
    return(
      <div>
        {//TODO: build update form
          //Text field for new content
          //Update button:
            //onClick update note & return to default(hidden) view
          //Cancel button:
            //onClick do NOT update note & return to default view
        }
        <input
          type="text"
        />

      </div>
    );
  }
}

export default NoteUpdateForm;
