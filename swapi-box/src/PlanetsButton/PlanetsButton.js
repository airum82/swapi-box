import React from 'react';

export const PlanetsButton = ({ fetchPlanets, retrieveData, cleanPlanetData}) => {
  return (
    <button onClick={() => {
      fetchPlanets(cleanPlanetData, retrieveData)
    }}>planets</button>

  )
}