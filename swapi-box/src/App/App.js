import React, { Component } from 'react';
import './App.css';
import { Intro } from '../Intro/Intro';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { PeopleButton } from '../PeopleButton/PeopleButton';
import { PlanetsButton } from '../PlanetsButton/PlanetsButton';
import { VehiclesButton } from '../VehiclesButton/VehiclesButton';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';
import { helper } from '../helper/helper.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      helper: new helper(),
      intro: {}

    }
  }

  viewFavorites = () => {

  }

  componentDidMount() {
    const url = "https://swapi.co/api/films/";
    fetch(url)
    .then(response => response.json())
    .then(result => this.state.helper.pickFilmIntro(result))
    .then(intro => this.setState({ intro }))
  }

  render() {
    return (
      <div className="App">
        <Intro intro={this.state.intro}/>
        <main className='main'>
          <h1>Swapi-box</h1>
          <FavoritesButton viewFavorites={this.viewFavorites}/>
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
