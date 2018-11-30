import React, { Component } from 'react';
import './App.css';
import './newPlantForm.css'
import firebase from './firebase';
import AddNewButton from './AddNewButton'
import NewPlantForm from './NewPlantForm';
import Plant from './PlantCard';

const dbMain = firebase.database().ref();

class App extends Component {
  constructor(){
    super();
    this.state = {
      showForm: false,
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
      if(snapshot.val() ){
      this.setState({
          plantShelf: snapshot.val()
        })
      }
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
    let newObj = Object.assign({}, this.state.newPlant);
    newObj.typeOfPlant = event.target.id;
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
    this.setState({
      showForm: false,
    });

    this.setState({
      [event.target.id]: ""
    });
  }
  

  buttonClicked = () => {
    this.setState({
      showForm: true,
    });
  }

  buttonClose = () => {
    this.setState({
      showForm: false,
    });
  }


  deleteButton = (event) => {
    const firebaseKey = event.target.id;

    console.log(firebaseKey);

    const plantRef = firebase.database().ref(`/${firebaseKey}`)
    plantRef.remove();
  }

  
  render() {
    return (
      <div className="App">

        <AddNewButton buttonClicked={this.buttonClicked}/>
        
        {this.state.showForm
         ? <NewPlantForm
          buttonClose={this.buttonClose}
          newPlant={this.state.newPlant}
          handleWater={this.handleWater}
          handleChecked={this.handleChecked}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleSun={this.handleSun}
        /> 
        : null
        }

       
        
        { Object.entries(this.state.plantShelf).map(plantObj => {
          return (
            <div>
            < Plant 
            key={plantObj[0]}
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
            firebaseKey={plantObj[0]}
            deleteButton={this.deleteButton}
            />
        
            </div>
          )
        })
      }  
      </div>
    );
  }
}

export default App;
