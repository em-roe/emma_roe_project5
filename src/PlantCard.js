import React from 'react';

const Plant = (props) => {
  return (

       <div className="plantCard">

        <h4>{props.nickname}</h4>

        <ul>
        <li className="species"> <span className="species">{props.species}</span></li>

        <li className="water"> 
        {/* Water requirements:  */}
        <span className="waterItem">
        {props.water}
        </span>
        </li>

        <li><span className="listItem">  Type: </span>{props.typeOfPlant}</li>

        <li> <span className="listItem"> Light requirements: </span>{props.sunshine}</li>

      <li> <span className="listItem"> Current health status: </span>{props.happiness}</li>

    <li><span className="listItem"> Last repotted:</span> {props.repotted}</li>

    <li> <span className="listItem">notes:</span> {props.notes}</li>

    <li> <span className="listItem">Acquired On: </span> {props.acquiredOn}</li>
        </ul>

        <button
          label="delete"
          className="deleteButton"
          onClick={props.deleteButton}
          id={props.firebaseKey}>
          good bye dead plant
        </button>

        </div>
  )
}

export default Plant;