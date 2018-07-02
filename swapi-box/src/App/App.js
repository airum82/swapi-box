import React, { Component } from 'react';
import './App.css';
import { Intro } from '../Intro/Intro';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';


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
        </main>
      </div>
    );
  }
}

export default App;
