import React, { Component } from 'react';

class AddNewButton extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }

  buttonChecked = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div className="Button">
        <button onClick={this.buttonChecked}>Add New Plant</button>
      </div>
    );
  }
}

export default AddNewButton;


// whereever i'm placing the form, instead of placing it right away, 
// add a if/else if visible = true
// if true, show the form component 
//if false, show the AddNewButton 
// on the Button click, it will be a method on my mainApp (might have to pass props?)
// then on click, the method will check the current state, and then toggle to the other state 
//then it will show or hide the appropriate components. 