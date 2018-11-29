import React, { Component } from 'react';
import firebase from './firebase';

const dbMain = firebase.database().ref();

class NewPlant extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      typeOfPlant: [],
      waterAmount: null,
      sunshine: null,
      happiness: "",
      repotted: "",
      acquiredOn: "",
      notes: "",
      plantImage: "",
    }
  }


  handleWater = (event) => {
    console.log(event.target.id);

    this.setState({
      waterAmount: event.target.id,
    })
  }

  handleSun = (event) => {
    this.setState({
      sunshine: event.target.id,
    })
  }

  //here we created a new handleChecked method to target only the checkboxes. 
  // if the plant type exists in the array, then remove it. 
  //if it doens't exist, add it to the array.
  handleChecked = (event) => {
    const newTypeOfPlant = this.state.typeOfPlant;
    const indexOfPlantType = newTypeOfPlant.indexOf(event.target.id)
    
    if(newTypeOfPlant.includes(event.target.id)){
      newTypeOfPlant.splice(indexOfPlantType,1)
    } else {
      newTypeOfPlant.push(event.target.id)
    }
    
    this.setState({
      typeOfPlant: newTypeOfPlant,
    })
  }


  //here I created a handleChange function to apply only to text inputs. 
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    let dateAdded = new Date();
    let dd = dateAdded.getDate();
    let mm = dateAdded.getMonth() + 1; //January is 0!
    let yyyy = dateAdded.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    dateAdded = mm + '/' + dd + '/' + yyyy;


    const savedPlant = {
      nickname: this.state.nickname,
      typeOfPlant: this.state.typeOfPlant,
      species: this.state.species,
      dateAdded: dateAdded,
      waterAmount: this.state.waterAmount,
      sunshine: this.state.sunshine,
      happiness: this.state.happiness,
      repotted: this.state.repotted,
      acquiredOn: this.state.acquiredOn,
      notes: this.state.notes,
      plantImage: this.state.plantImage,
    }

    dbMain.push(savedPlant);
    console.log(savedPlant);

    this.setState({
      nickname: "",
      typeOfPlant: [],
      species: "",
      waterAmount: null,
      sunshine: null,
      happiness: "",
      repotted: "",
      acquiredOn: "",
      notes: "",
      plantImage: "",
      dateAdded: "",
    })

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} id="newPlant" className="clearfix">

        <label htmlFor="nickname">Nickname:</label>
        <input
          id="nickname"
          onChange={this.handleChange}
          type="text"
          value={this.state.nickname}
        />

        <fieldset id="typeOfPlant">
          <legend> Type of Plant </legend>
          <label htmlFor="trailingClimbing">Trailing/Climbing</label>
          <input
            id="trailingClimbing"
            onChange={this.handleChecked}
            name="type"
            type="checkbox"/>
            
          <label htmlFor="succulentsCacti">Succulent/Cacti</label>
          <input
            id="succulentsCacti"
            onChange={this.handleChecked}
            name="type"
            type="checkbox"/>
          
          <label htmlFor="tropical">Tropical</label>
          <input
            id="tropical"
            onChange={this.handleChecked}
            name="type"
            type="checkbox"/>

          <label htmlFor="tallTrees">Tall/Tree</label>     
          <input
            id="tallTrees"
            onChange={this.handleChecked}
            name="type"
            type="checkbox"/>

          
          <label htmlFor="foliage">Foliage</label>
          <input
            id="foliage"
            onChange={this.handleChecked}
            name="type"
            type="checkbox"/>

          <label htmlFor="flowering">Flowering</label>
          <input
            id="flowering"
            onChange={this.handleChecked}
            name="type"
            type="checkbox"/>

          <label htmlFor="other">Other</label>
          <input
            id="other"
            onChange={this.handleChecked}
            name="type"
            type="checkbox"/>
        </fieldset>

       <label htmlFor="species">Species:</label>
        <input
          id="species"
          onChange={this.handleChange}
          type="text"
          value={this.state.species}/>

        <fieldset id="waterAmount">
          <legend>How Thirsty?</legend>
        <label htmlFor="oneWater">smol water</label>
        <input
          // checked={this.state.waterAmount !== null}
          id="oneWater"
          onChange={this.handleWater}
          name="thirsty"
          type="radio"/>

        <label htmlFor="twoWater">two waters</label>
        <input
          // checked={this.state.waterAmount !== null}
          id="twoWater"
          onChange={this.handleWater}
          name="thirsty"
          type="radio"/>

        <label htmlFor="threeWater">much waters</label>
        <input
          // checked={this.state.waterAmount !== null}
          id="threeWater"
          onChange={this.handleWater}
          name="thirsty"
          type="radio"/>
        </fieldset>

        <fieldset id="sunshine">
        <legend>How much Sun?</legend>
        <label htmlFor="fullSun">Full Sun</label>
        <input
          // checked={this.state.sunshine !== null}
          id="fullSun"
          onChange={this.handleSun}
          name="sunshine"
          type="radio"/>
        
        <label htmlFor="indirectSun">Indirect Sun</label>
        <input
          // checked={this.state.sunshine !== null}
          id="indirectSun"
          onChange={this.handleSun}
          name="sunshine"
          type="radio"/>

        <label htmlFor="lowSun">Low Sun</label>
        <input
          // checked={this.state.sunshine !== null}
          id="lowSun"
          onChange={this.handleSun}
          name="sunshine"
          type="radio"/>
        </fieldset>

        <label htmlFor="happiness">How happy:</label>
        <input
          id="happiness"
          onChange={this.handleChange}
          type="text"
          value={this.state.happiness}
        />

        <label htmlFor="repotted">Last repotted on:</label>
        <input
          id="repotted"
          onChange={this.handleChange}
          type="date"
          value={this.state.repotted}
        />

        <label htmlFor="acquiredOn">Date acquired:</label>
        <input
          id="acquiredOn"
          onChange={this.handleChange}
          type="date"
          value={this.state.dateAcquired}
        />

        {/* <label htmlFor="plantImage">Display Icon:</label>
        <input
          id="plantImage"
          onChange={this.handleChange}
          type="text"
          value={this.state.plantImage}
        /> */}

        <label htmlFor="notes">Additional Notes:</label>
        <input
          id="notes"
          onChange={this.handleChange}
          type="text"
          value={this.state.notes}
        />

        <input type="submit" value="Add to Collection" />
      </form>
    )
  }
}
 export default NewPlant;

