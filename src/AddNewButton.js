import React from 'react';

const AddNewButton = (props) => {

    return (
      <div className="Button">
        <button onClick={props.buttonClicked}>Add New Plant</button>
      </div>
    );
  }

export default AddNewButton;


