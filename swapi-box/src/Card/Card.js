import React from 'react';
import './Card.css'

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
          <li>{person.homeworld}</li>
          <li>{person.species}</li>
          <li>{person.language}</li>
          <li>{person.population}</li>
        </ul>
        <button>Favorite</button>
      </div>
    )
  } else if(Object.keys(props).includes('terrain')) {
    planet = {...props};
    return (
      <div className="card">
        <h2>{planet.name}</h2>
        <ul>
          <li>{planet.terrain}</li>
          <li>{planet.population}</li>
          <li>{planet.climate}</li>
          { planet.residents.includes('http') ? '' : planet.residents.map(resident => {
            return <li>{resident}</li>
          }) }
        </ul>
        <button>Favorite</button>
      </div>
    )
  }
}