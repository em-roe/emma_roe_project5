import React from 'react';

const Plant = (props) => {
  return (

    <div id="plantContainer">

      <h4>{props.nickname}</h4>
      <li>{props.species}</li>
      <li>Water requirements: {props.water}</li>
      <li>Type: {props.typeOfPlant}</li>
      <li>Light requirements: {props.sunshine}</li>
      <li>Current health status: {props.happiness}</li>
      <li>Last repotted: {props.repotted}</li>
      <li>notes: {props.notes}</li>
      <li>Acquired On: {props.acquiredOn}</li>

      <button
        onClick={props.deleteButton}
       id={props.firebaseKey}>good bye dead plant</button>
    </div>
  )
}

export default Plant;