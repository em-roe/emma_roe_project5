import React, { Component } from 'react';
import './App.css';
import './newPlant.css'
import firebase from './firebase';
import NewPlant from './NewPlant';

const dbMain = firebase.database().ref();

class App extends Component {
  constructor(){
    super();
    this.state = {

      plantShelf: {}
    }
  }

  componentDidMount() {
    //this attaches an event listener to firebase, so our plantShelf is updated with the contents of the main database on firebase
    dbMain.on('value', (snapshot) => {
      this.setState({
        plantShelf: snapshot.val()
      });
    });
  }

  // handleChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // };

  render() {
    return (
      <div className="App">
        <NewPlant />
      </div>
    );
  }
}

export default App;
