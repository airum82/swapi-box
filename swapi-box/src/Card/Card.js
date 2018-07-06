import React from 'react';
import './Card.css'

export const Card = ({}) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <ul>
        <li>{props.homeworld}</li>
        <li>{props.species}</li>
        <li>{props.language}</li>
        <li>{props.population}</li>
      </ul>
      <button>Favorite</button>
    </div>

  )
}