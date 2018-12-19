import React, { Component, Fragment } from 'react';
import './App.css';
import './styles/setup.css';
import './styles/newPlantForm.css';
import './styles/button.css';
import firebase from './firebase';
import AddNewButton from './AddNewButton'
import NewPlantForm from './NewPlantForm';
import Plant from './PlantCard';
import swal from 'sweetalert';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTint, faSun, faWindowClose, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

library.add(faTint, faSun, faWindowClose, faSkullCrossbones)

const defaultFormState = {
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
}

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      showForm: false,
      showAddButton: true,
      plantShelf: {},
      newPlant: defaultFormState
    }
  }

  login = () => {
    auth.signInWithPopup(provider).then((result) => {
        this.setState({
          user: result.user
        });
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
          plantShelf: {},
        });
      });
  }

  anonLogIn = () => {
    auth.signInAnonymously().then((result) => {
      this.setState({
        user: result.user,
      })
    })
  }


  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        }
          ,() => {
            if (this.state.user.isAnonymous){
              this.dbRef = firebase.database().ref('/guest')
            } else {
              this.dbRef = firebase.database().ref(`/${this.state.user.uid}`)
            }
              this.dbRef.on('value', (snapshot) => {
              this.setState({
                plantShelf: snapshot.val() || {}
              })
            })
          });
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
    newObj.typeOfPlant = event.target.value;
    this.setState({
      newPlant: newObj,
    })
  }

  handleToxic = (event) => {

  }

  handleWater = (event) => {
    let newObj = Object.assign({}, this.state.newPlant);
    newObj.waterAmount = event.target.value;
    this.setState({
      newPlant: newObj,
    })
  }

  handleSun = (event) => {
    let newObj = Object.assign({}, this.state.newPlant);
    newObj.sunshine = event.target.value;
    this.setState({
      newPlant: newObj,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    this.dbRef.push(this.state.newPlant);
    this.setState({
      showForm: false,
      showAddButton: true,
    });
    this.setState({
      newPlant: defaultFormState
    });
  }

  buttonClicked = () => {
    this.setState({
      showForm: true,
      showAddButton: false,
    });
  }

  buttonClose = () => {
    this.setState({
      showForm: false,
      showAddButton: true,
    });
  }


  deleteButton = (event) => {
    console.log("trying to delete");
    const firebaseKey = event.target.id;
    const plantRef = firebase.database().ref(`/${firebaseKey}`);
    const plantRefGuest = firebase.database().ref(`/guest/${firebaseKey}`);
    
    plantRefGuest.remove();
    plantRef.remove();

  }
    // swal({
    //   title: "Are you sure?",
    //   text: "Remove plant from collection",
    //   buttons: true,
    // }).then((submit) => {
    //   if (submit) {
    //     console.log("tried to delete");
    //     plantRef.remove() && plantRefGuest.remove();
    //   } else {
    //     console.log("not working");
    //   }
    // });

 
  
  render() {
    return (
      <div className="App wrapper">

        <header>
        <h1
        style={{
          margin: '0 auto',
        }}
        >Plant Care Catalog</h1>
        {this.state.user ? 
        <button onClick={this.logout}>Log Out</button> 
        :
        <>
        <button onClick={this.login}>Login</button>
        <button onClick={this.anonLogIn}>Try with Guest Use</button> 
        </>
        }
        {this.state.showAddButton && this.state.user ? 
        <AddNewButton buttonClicked={this.buttonClicked}/>
        : null 
        }
        
        </header> 



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

       
        
        <div class="plantShelf">
        { Object.entries(this.state.plantShelf).map(plantObj => {
          return (
            <Fragment>
              < Plant 
              key={plantObj[0]}
              nickname={plantObj[1].nickname}
              typeOfPlant={plantObj[1].typeOfPlant}
              species={plantObj[1].species}
              water={plantObj[1].waterAmount}
              sunshine={plantObj[1].sunshine}
              repotted={plantObj[1].repotted} 
              acquiredOn={plantObj[1].acquiredOn}
              notes={plantObj[1].notes}
              plantImage={plantObj[1].plantImage}
              firebaseKey={plantObj[0]}
              deleteButton={this.deleteButton}
              editButton={this.editButton}
              />
            </Fragment>
            )
          })
        } 
        </div> 
      </div>
    );
  }
}

export default App;
