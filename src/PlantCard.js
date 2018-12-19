import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Plant = (props) => {
  return (

       <div className="plantCard">

        <h4>{props.nickname}</h4>

        <ul>
        <li className="species"> <span className="species">{props.species}</span></li>

        <li><span className="listItem">  Type: </span>{props.typeOfPlant}</li>

        <li className="water"> 
          <span className="displayIcon waterIcon">
          <FontAwesomeIcon icon="tint"/> </span>
          <span className="listItem">Water requirements: </span>
        <span className="waterItem"> 
        {props.water}
        </span>
        </li>

        <li> <span className="displayIcon sun"> <FontAwesomeIcon icon='sun' /> </span><span className="listItem"> Light requirements: </span>{props.sunshine}</li>


    <li><span className="listItem">  Last repotted:</span> {props.repotted}</li>


    <li> <span className="listItem">Acquired On: </span> {props.acquiredOn}</li>
    <li> <span className="listItem">Notes:</span> {props.notes}</li>
        </ul>


      <div id="removePlant">
      <label htmlFor="delete" className="visuallyhidden">Remove plant from Collection</label>

        <button
          label="delete"
          className="deleteButton"
          onClick={props.deleteButton}
          id={props.firebaseKey}
          name="delete">
          <FontAwesomeIcon
          style={{
            fontSize: '1.6rem'
          }} icon="window-close" />
        </button>

      <label htmlFor="delete">remove from collection</label>
      </div>

      {/* <div id="editPlant">
        <label htmlFor="edit" className="visuallyhidden">Edit plant Details</label>

        <button
          label="edit"
          className="editButton"
          onClick={props.editButton}
          id={props.firebaseKey}
          name="delete">
          <FontAwesomeIcon
            style={{
              fontSize: '1.2rem'
            }} icon="window-close" />
        </button>

        <label htmlFor="edit">Edit plant details</label>
      </div> */}

        </div>
  )
}

export default Plant;