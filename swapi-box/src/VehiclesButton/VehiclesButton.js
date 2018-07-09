import React from 'react';
import PropTypes from 'prop-types';

export const VehiclesButton = ({ fetchVehicles, cleanVehicles, retrieveVehicles }) => {
  return (
    <button onClick={() => fetchVehicles(cleanVehicles, retrieveVehicles)
    }>vehicles</button>

  )
}

VehiclesButton.propTypes = {
  fetchVehicles: PropTypes.func,
  cleanVehicles: PropTypes.func,
  retrieveVehicles: PropTypes.func
}

