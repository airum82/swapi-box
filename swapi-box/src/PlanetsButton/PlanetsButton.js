import React from 'react';
import PropTypes from 'prop-types';

export const PlanetsButton = ({ fetchPlanets, retrieveData, cleanPlanetData}) => {
  return (
    <button onClick={() => {
      fetchPlanets(cleanPlanetData, retrieveData)
    }}>planets</button>

  )
}

PlanetsButton.propTypes = {
  fetchPlanets: PropTypes.func,
  retrieveData: PropTypes.func,
  cleanPlanetData: PropTypes.func
}