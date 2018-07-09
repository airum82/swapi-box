import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

export const Card = (props) => {
  let person;
  let planet;
  let vehicle;
  if(Object.keys(props).includes('species')) {
    person = {...props}
    return (
      <div className="card">
        <h2>{person.name}</h2>
        <ul>
          <li>Homeworld:{person.homeworld}</li>
          <li>Species:{person.species}</li>
          <li>Language:{person.language}</li>
          <li>Population:{person.population}</li>
        </ul>
        <button onClick={() => person.favoriteCard(person)}>
          Favorite
        </button>
      </div>
    )
  } else if(Object.keys(props).includes('terrain')) {
    planet = {...props};
    let keyId = 0;
    return (
      <div className="card">
        <h2>{planet.name}</h2>
        <ul>
          <li>Terrain:{planet.terrain}</li>
          <li>Population:{planet.population}</li>
          <li>Climate:{planet.climate}</li>
          <li>{planet.residents.length ? 'Residents:' : ''}</li>
          { !planet.residents.length ? '' : planet.residents.map(resident => {
            return <li key={keyId++}>{resident}</li>
          }) }
        </ul>
        <button onClick={() => planet.favoriteCard(planet)}>
          Favorite
        </button>
      </div>
    )
  } else {
    vehicle = {...props}
    return (
      <div className="card">
        <h2>Name:{vehicle.name}</h2>
        <ul>
          <li>Model:{vehicle.model}</li>
          <li>Class Type:{vehicle.classType}</li>
          <li>Passenger Number:{vehicle.passengerNumber}</li>
        </ul>
        <button onClick={() => vehicle.favoriteCard(vehicle)}>
          Favorite
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  props: PropTypes.object
}