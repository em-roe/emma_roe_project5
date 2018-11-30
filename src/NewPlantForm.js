import React from 'react';

const NewPlantForm = (props) => {

  
  return(
    <div id="newPlantForm">
    
      <button id="close" onClick={props.buttonClose}>CLOSE ME</button>

      <form onSubmit={props.handleSubmit} id="newPlant" className="clearfix"> 

      <label htmlFor="nickname">Nickname:</label>
      <input
        id="nickname"
        onChange={props.handleChange}
        type="text"
        value={props.newPlant.nickname}
        required
      />

      <fieldset id="typeOfPlant">
        <legend> Type of Plant </legend>
        <label htmlFor="trailingClimbing">Trailing/Climbing</label>
        <input
          id="trailingClimbing"
          onChange={props.handleChecked}
          name="type"
          type="radio" />

        <label htmlFor="succulentsCacti">Succulent/Cacti</label>
        <input
          id="succulentsCacti"
          onChange={props.handleChecked}
          name="type"
          type="radio" />

        <label htmlFor="tropical">Tropical</label>
        <input
          id="tropical"
          onChange={props.handleChecked}
          name="type"
          type="radio" />

        <label htmlFor="tallTrees">Tall/Tree</label>
        <input
          id="tallTrees"
          onChange={props.handleChecked}
          name="type"
          type="radio" />


        <label htmlFor="foliage">Foliage</label>
        <input
          id="foliage"
          onChange={props.handleChecked}
          name="type"
          type="radio" />

        <label htmlFor="flowering">Flowering</label>
        <input
          id="flowering"
          onChange={props.handleChecked}
          name="type"
          type="radio" />

        <label htmlFor="other">Other</label>
        <input
          id="other"
          onChange={props.handleChecked}
          name="type"
          type="radio" />
      </fieldset>

      <label htmlFor="species">Species:</label>
      <input
        id="species"
        onChange={props.handleChange}
        type="text"
        value={props.newPlant.species} />

      <fieldset id="waterAmount">
        <legend>How Thirsty?</legend>
        <label htmlFor="oneWater">smol water</label>
        <input
          // checked={this.state.waterAmount !== null}
          id="oneWater"
          onChange={props.handleWater}
          name="thirsty"
          type="radio" />

        <label htmlFor="twoWater">two waters</label>
        <input
          // checked={this.state.waterAmount !== null}
          id="twoWater"
          onChange={props.handleWater}
          name="thirsty"
          type="radio" />

        <label htmlFor="threeWater">much waters</label>
        <input
          // checked={this.state.waterAmount !== null}
          id="threeWater"
          onChange={props.handleWater}
          name="thirsty"
          type="radio" />
      </fieldset>

      <fieldset id="sunshine">
        <legend>How much Sun?</legend>
        <label htmlFor="fullSun">Full Sun</label>
        <input
          // checked={this.state.sunshine !== null}
          id="fullSun"
          onChange={props.handleSun}
          name="sunshine"
          type="radio" />

        <label htmlFor="indirectSun">Indirect Sun</label>
        <input
          // checked={this.state.sunshine !== null}
          id="indirectSun"
          onChange={props.handleSun}
          name="sunshine"
          type="radio" />

        <label htmlFor="lowSun">Low Sun</label>
        <input
          // checked={this.state.sunshine !== null}
          id="lowSun"
          onChange={props.handleSun}
          name="sunshine"
          type="radio" />
      </fieldset>

      <label htmlFor="happiness">How happy:</label>
      <input
        id="happiness"
        onChange={props.handleChange}
        type="text"
          value={props.newPlant.happiness}
      />

      <label htmlFor="repotted">Last repotted on:</label>
      <input
        id="repotted"
        onChange={props.handleChange}
        type="date"
          value={props.newPlant.repotted}
      />

      <label htmlFor="acquiredOn">Date acquired:</label>
      <input
        id="acquiredOn"
        onChange={props.handleChange}
        type="date"
          value={props.newPlant.dateAcquired}
      />

      {/* <label htmlFor="plantImage">Display Icon:</label>
        <input
          id="plantImage"
          onChange={props.handleChange}
          type="text"
          value={this.state.plantImage}
        /> */}

      <label htmlFor="notes">Additional Notes:</label>
      <input
        id="notes"
        onChange={props.handleChange}
        type="text"
          value={props.newPlant.notes}
      />

      <input type="submit" value="Add to Collection" 
          onSubmit={props.handleSubmit}/>
    </form>
    </div>
  )

}
 export default NewPlantForm;

