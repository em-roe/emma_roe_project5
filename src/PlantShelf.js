import React, { Component } from 'react';
import NewPlant from './NewPlant';



class PlantShelf extends Component {
  constructor() {
    super();
    this.state = {
  
    }
  }

  componentDidMount() {

  }


  // i think here we need to map through all of the new plants and then for each one, create an LI with all the information in it.....????
  render() {
    return (
      <div>
        <ul>
          {NewPlant}
        </ul>
      </div>
    );
  }
}

export default PlantShelf;