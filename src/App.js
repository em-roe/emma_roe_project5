import React, { Component } from 'react';
import './App.css';
import './newPlantForm.css'
import firebase from './firebase';
// import PlantShelf from './PlantShelf';
import AddNewButton from './AddNewButton'
import NewPlantForm from './NewPlantForm';
import Plant from './Plant';

const dbMain = firebase.database().ref();

class App extends Component {
  constructor(){
    super();
    this.state = {
      plantShelf: {},
      newPlant: {
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
      },
    }
  }

  componentDidMount() {
    dbMain.on('value', (snapshot) => {
      this.setState({
        plantShelf: snapshot.val()
      });
    });
  }

  handleChange = (event) => {
    let newObj = Object.assign({}, this.state.newPlant);
    newObj[event.target.id] = event.target.value;

    this.setState({
      newPlant: newObj
    });
  };

  handleChecked = (event) => {
    const newTypeOfPlant = this.state.newPlant.typeOfPlant;
    const indexOfPlantType = newTypeOfPlant.indexOf(event.target.id)
    if (newTypeOfPlant.includes(event.target.id)) {
      newTypeOfPlant.splice(indexOfPlantType, 1)
    } else {
      newTypeOfPlant.push(event.target.id)
    }
    let newObj = Object.assign({}, this.state.newPlant);
    newObj.typeOfPlant = newTypeOfPlant;
    this.setState({
      newPlant: newObj,
    })
  }

  handleWater = (event) => {
    let newObj = Object.assign({}, this.state.newPlant);
    newObj.waterAmount = event.target.id;
    this.setState({
      newPlant: newObj,
    })
  }

  handleSun = (event) => {
    let newObj = Object.assign({}, this.state.newPlant);
    newObj.sunshine = event.target.id;
    this.setState({
      newPlant: newObj,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dbMain.push(this.state.newPlant);
  }
  
  render() {
    return (
      <div className="App">

        <AddNewButton />
        
        {/* this renders the newPlantForm */}
        {<NewPlantForm
          newPlant={this.state.newPlant} 
          handleWater={this.handleWater} 
          handleChecked={this.handleChecked} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          handleSun={this.handleSun}
        />
        }

        {/* this renders a new div for each "plant object" that exists in the firebase DB 
          so, why is "water amount" appearing when there is no plant object with it?*/}

        { Object.entries(this.state.plantShelf).map(plantObj => {
          return (
            <div>
            < Plant 
            nickname={plantObj[1].nickname}
            typeOfPlant={plantObj[1].typeOfPlant}
            species={plantObj[1].species}
            water={plantObj[1].waterAmount}
            sunshine={plantObj[1].sunshine}
            happiness={plantObj[1].happiness}
            repotted={plantObj[1].repotted}
            acquiredOn={plantObj[1].acquiredOn}
            notes={plantObj[1].notes}
            plantImage={plantObj[1].plantImage}
            />
            <p>**********************</p>
            </div>
          )
        })
      }  
      </div>
    );
  }
}

export default App;
