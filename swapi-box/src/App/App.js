import React, { Component } from 'react';
import './App.css';
import { Intro } from '../Intro/Intro';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { PeopleButton } from '../PeopleButton/PeopleButton';
import { PlanetsButton } from '../PlanetsButton/PlanetsButton';
import { VehiclesButton } from '../VehiclesButton/VehiclesButton';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Intro />
        <main className='main'>
          <h1>Swapi-box</h1>
          <FavoritesButton />
          <hr />
          <PeopleButton />
          <PlanetsButton />
          <VehiclesButton />
          <CategoryContainer />
        </main>
      </div>
    );
  }
}

export default App;
