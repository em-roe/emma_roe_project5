import React from 'react';

const AddNewButton = (props) => {

    return (
      <div >
        <button className="addNewButton" onClick={props.buttonClicked}>Add New Plant</button>
      </div>
    );
  }

export default AddNewButton;



