import React, { Component } from 'react';
import firebase from './firebase';

const dbMain = firebase.database().ref();


class NewPlant extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      type: "",
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)

    //get the label of the "on" radio button 
    //event.target.id gets the id
    // three types of buttons: checkbox, type, and radio 
    console.log(event.target.id)
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //post the new plantCard to firebase

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
      // typeOfPlant: this.state.typeOfPlant,
      species: this.state.species,
      // date: this.state.dateAdded,
      waterAmount: this.state.waterAmount,
      sunshine: this.state.sunshie,
      happiness: this.state.happiness,
      repotted: this.state.repotted,
      acquiredOn: this.state.acquiredOn,
      notes: this.state.notes,
      plantImage: this.state.plantImage,
    }

    //clear the form  
    this.setState({
      author: "",
      title: "",
    })

    //we can use push or set when writing to firebase. push will create a unique key, while set will create a node with that name
    dbMain.push(savedPlant);
    console.log(savedPlant);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} id="newPlant">

        <label htmlFor="nickname">Nickname:</label>
        <input
          id="nickname"
          onChange={this.handleChange}
          type="text"
        />

        <fieldset id="typeOfPlant">
          <legend> Type of Plant </legend>
          <label htmlFor="trailingClimbing">Trailing/Climbing</label>
          <input
            id="trailingClimbing"
            onChange={this.handleChange}
            name="type"
            type="checkbox"/>
            
          <label htmlFor="succulentsCacti">Succulent/Cacti</label>
          <input
            id="succulentsCacti"
            onChange={this.handleChange}
            name="type"
            type="checkbox"/>
          
          <label htmlFor="tropical">Tropical</label>
          <input
            id="tropical"
            onChange={this.handleChange}
            name="type"
            type="checkbox"/>

          <label htmlFor="tallTrees">Tall/Tree</label>     
          <input
            id="tallTrees"
            onChange={this.handleChange}
            name="type"
            type="checkbox"/>

          
          <label htmlFor="foliage">Foliage</label>
          <input
            id="foliage"
            onChange={this.handleChange}
            name="type"
            type="checkbox"/>

          <label htmlFor="flowering">Flowering</label>
          <input
            id="flowering"
            onChange={this.handleChange}
            name="type"
            type="checkbox"/>

          <label htmlFor="other">Other</label>
          <input
            id="other"
            onChange={this.handleChange}
            name="type"
            type="checkbox"/>
        </fieldset>

       <label htmlFor="species">Species:</label>
        <input
          id="species"
          onChange={this.handleChange}
          type="text"
        />

        <fieldset id="waterAmount">
          <legend>How Thirsty?</legend>
        <label htmlFor="oneWater">smol water</label>
        <input
          id="oneWater"
          onChange={this.handleChange}
          name="thirsty"
          type="radio"
        />

        <label htmlFor="twoWater">two waters</label>
        <input
          id="twoWater"
          onChange={this.handleChange}
          name="thirsty"
          type="radio"
        />

        <label htmlFor="threeWater">threeeWater</label>
        <input
          id="threeWater"
          onChange={this.handleChange}
          name="thirsty"
          type="radio"
        />
        </fieldset>

        <fieldset id="sunshine">
        <label htmlFor="sunshine">How much sun:</label>
        <input
          id="fullSun"
          onChange={this.handleChange}
          name="sunshine"
          type="radio"/>
        <input
          id="indirectSun"
          onChange={this.handleChange}
          name="sunshine"
          type="radio"/>
        <input
          id="lowSun"
          onChange={this.handleChange}
          name="sunshine"
          type="radio"/>
        </fieldset>

        <label htmlFor="happiness">How happy:</label>
        <input
          id="happiness"
          onChange={this.handleChange}
          type="text"
        />

        <label htmlFor="repotted">Last repotted on:</label>
        <input
          id="repotted"
          onChange={this.handleChange}
          type="date"
        />

        <label htmlFor="acquiredOn">Date acquired:</label>
        <input
          id="acquiredOn"
          onChange={this.handleChange}
          type="date"
        />

        <label htmlFor="plantImage">Display Icon:</label>
        <input
          id="plantImage"
          onChange={this.handleChange}
          type="text"
        />

        <label htmlFor="notes">Additional Notes:</label>
        <input
          id="notes"
          onChange={this.handleChange}
          type="text"
        />

        <input type="submit" value="Add to Collection" />

      </form>

    )
  }

}
 export default NewPlant;

