import React, { Component } from 'react';
import './App.css';
import { Intro } from '../Intro/Intro';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { PeopleButton } from '../PeopleButton/PeopleButton';
import { PlanetsButton } from '../PlanetsButton/PlanetsButton';
import { VehiclesButton } from '../VehiclesButton/VehiclesButton';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';
import { Card } from '../Card/Card';
import { helper } from '../helper/helper.js';
import { apiHelper } from '../Api-call/Api-call.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      helper: new helper(),
      api : new apiHelper(),
      intro: {},
      people: [],
      planets: [],
      vehicles: []

    }
  }

  resetState = () => {
    this.setState({
      people: [],
      planets: [],
      vehicles: []
    })
  }

  determineCategory = (sampleItem) => {
    let category;
    if(Object.keys(sampleItem).includes('residents')) {
      category = 'planets';
    } else if(Object.keys(sampleItem).includes('model')) {
      category = 'vehicles';
    } else if(Object.keys(sampleItem).includes('intro')) {
      category = 'intro';
    } else {
      category = 'people'
    }
    return category
  }

  retrieveData = (data, sampleItem) => {
    this.resetState()
    const category = this.determineCategory(sampleItem)
    this.setState({
      [category]: data
    })
  }

  favoriteCard = (props) => {
    const category = this.determineCategory(props);
    const newFavorite = this.state[category].map(item => {
      if(item.name === props.name) {
        return {...item, favorite: true}
      } else {
        return item;
      }
    });
    this.setState({ 
      [category]: newFavorite 
    })
  }

  componentDidMount() {
    // this.state.api.fetchIntros(this.state.helper.pickFilmIntro,
                               // this.retrieveData)
  }

  render() {
    let category;
    if(this.state.planets.length) {
      category = this.state.planets;
    } else if(this.state.people.length) {
      category = this.state.people;
    } else {
      category = this.state.vehicles
    }
    return (
      <div className="App">
        <Intro intro={this.state.intro}/>
        <main className='main'>
          <h1>Swapi-box</h1>
          <hr />
          <section className="buttons">
            <PeopleButton 
              viewPeople={this.state.api.viewPeople}
              cleanPeople={this.state.helper.cleanPeople}
              retrieveData={this.retrieveData}
            />
            <PlanetsButton 
              fetchPlanets={this.state.api.fetchPlanets}
              retrieveData={this.retrieveData}
              cleanPlanetData={this.state.helper.cleanPlanetData}
            />
            <VehiclesButton 
              fetchVehicles={this.state.api.fetchVehicles}
              cleanVehicles={this.state.helper.cleanVehicles}
              retrieveVehicles={this.retrieveData} 
            />
            <FavoritesButton />
          </section>
          <CategoryContainer 
            category={category}
            favoriteCard={this.favoriteCard}
          />
        </main>
      </div>
    );
  }
}

export default App;
