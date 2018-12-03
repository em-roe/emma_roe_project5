import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewPlantForm = (props) => {

  
  return(
    <div id="plantForm">

      <form onSubmit={props.handleSubmit} id="newPlantForm" className="clearfix"> 


      <div className="top">
          <label htmlFor="nickname">Nickname:</label>
        <input
          id="nickname"
          onChange={props.handleChange}
          type="text"
          value={props.newPlant.nickname}
          required/>

          <label htmlFor="close" className="visuallyhidden">Close</label>
          <button id="close" className="close" onClick={props.buttonClose}>
            <FontAwesomeIcon icon="window-close" />
          </button>

        
        </div>

      <div className="second">
      <fieldset id="typeOfPlant" className="typeOfPlant">
        <legend> Type of Plant: </legend>

        <input
          id="trailingClimbing"
          onChange={props.handleChecked}
          name="type"
          type="radio"
          value="Trailing\/Climing"/>
        <label htmlFor="trailingClimbing">Trailing/Climbing 
        </label>
        

        <input
          id="succulentsCacti"
          onChange={props.handleChecked}
          name="type"
          type="radio"
          value="Succulent/Cactus" />
        <label htmlFor="succulentsCacti">Succulent/Cactus</label>

        <input
          id="tropical"
          onChange={props.handleChecked}
          name="type"
          type="radio"
          value="Tropical"/>
          <label htmlFor="tropical">Tropical</label>
          

        <input
          id="tallTrees"
          onChange={props.handleChecked}
          name="type"
          type="radio"
          value="Tall/Tree" />
          <label htmlFor="tallTrees">Tall/Tree</label>
          

        <input
          id="foliage"
          onChange={props.handleChecked}
          name="type"
          type="radio" 
          value="Foliage"/>
          <label htmlFor="foliage">Foliage </label>
         

        <input
          id="flowering"
          onChange={props.handleChecked}
          name="type"
          type="radio"
          value="Flowering" />
          <label htmlFor="flowering">Flowering</label>
          

        <input
          id="other"
          onChange={props.handleChecked}
          name="type"
          type="radio" 
          value="Other"/>
          <label htmlFor="other">Other</label>
          
      </fieldset>

          <div className="speciesDateContainer">

          <div className="speciesInput">
            <label htmlFor="species">Species:</label>
            <input
              id="species"
              onChange={props.handleChange}
              type="text"
              value={props.newPlant.species}
              placeholder="e.g. philodendron "  />
          </div>
          
        <label htmlFor="repotted">Last repotted on:
      <input
            id="repotted"
            onChange={props.handleChange}
            type="date"
            value={props.newPlant.repotted} />
        </label>

        <label htmlFor="acquiredOn">Date acquired:
      <input
            id="acquiredOn"
            onChange={props.handleChange}
            type="date"
            value={props.newPlant.dateAcquired} />
        </label>

        
      
      </div> 

      </div>


      

      <div id="sunWater">
        <fieldset id="waterAmount">
          <legend>Water Requirements:</legend>
          <input
            id="oneWater"
            onChange={props.handleWater}
            name="thirsty"
            type="radio"
            value="Water when completly dry" />
            <label htmlFor="oneWater">
              Water when completly dry   
              <span className="displayIcon waterIcon">
              <FontAwesomeIcon icon="tint" /> </span>
            </label>
            

          <input
            id="twoWater"
            onChange={props.handleWater}
            name="thirsty"
            type="radio"
            value="Water when mostly dry" />
            <label htmlFor="twoWater">
              Water when mostly dry 
              <span className="displayIcon waterIcon">
              <FontAwesomeIcon icon="tint" /> <FontAwesomeIcon icon="tint"/> </span>
            </label>
            

          <input
            id="threeWater"
            onChange={props.handleWater}
            name="thirsty"
            type="radio"
            value="keep evenly moist"/>
            <label htmlFor="threeWater">
              Keep evenly moist 
              <span className="displayIcon waterIcon"> <FontAwesomeIcon icon='tint' /> <FontAwesomeIcon icon="tint" /> <FontAwesomeIcon icon="tint" /> </span> 
            </label>
            
        </fieldset>

        <fieldset id="sunshine">
          <legend>Sunlight Requirements: </legend>
          <input
            id="fullSun"
            onChange={props.handleSun}
            name="sunshine"
            type="radio"
              value="Bright, direct light" />
            <label htmlFor="fullSun">
            Bright, direct light 
            <span className="displayIcon sun"> <FontAwesomeIcon icon='sun' /> <FontAwesomeIcon icon='sun' /> <FontAwesomeIcon icon='sun' /> </span>
            </label>
          

          <input
            id="indirectSun"
            onChange={props.handleSun}
            name="sunshine"
            type="radio" 
            value="direct or filtered light"/>
            <label htmlFor="indirectSun">Indirect or filtered light
            <span className="displayIcon sun"> <FontAwesomeIcon icon='sun' /> <FontAwesomeIcon icon='sun' /> </span>
            </label>
            

          <input
            id="lowSun"
            onChange={props.handleSun}
            name="sunshine"
            type="radio" 
            value="Tolerates low light"/>
            <label htmlFor="lowSun">Tolerates low light
            <span className="displayIcon sun"> <FontAwesomeIcon icon='sun' /> </span>
            </label>          
        </fieldset>

      </div>  

      {/* <label htmlFor="happiness">How happy:
      <input
        id="happiness"
        onChange={props.handleChange}
        type="text"
        value={props.newPlant.happiness}/>
      </label> */}


      {/* <label htmlFor="plantImage">Display Icon:</label>
        <input
          id="plantImage"
          onChange={props.handleChange}
          type="text"
          value={this.state.plantImage}
        /> */}

        <div className="notes">
          <label className="" htmlFor="notes">Additional Notes:
          </label>
          <textarea
            rows="5"
            cols="10"
            id="notes"
            onChange={props.handleChange}
            type="text"
            value={props.newPlant.notes}
            placeholder="enter notes, detailed care instructions, or just growth encouragement" />
        </div>


      <label htmlFor="submit" className="visuallyhidden"> Add to Collection

      </label>
      <input 
      id="submit"
      type="submit" value="Add to Collection" 
          onSubmit={props.handleSubmit}/>
    </form>
    </div>
  )

}
 export default NewPlantForm;

