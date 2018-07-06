import React from 'react';

export const VehiclesButton = ({ fetchVehicles, cleanVehicles, retrieveVehicles }) => {
  return (
    <button onClick={() => {
      fetchVehicles(cleanVehicles, retrieveVehicles)
    }}>vehicles</button>

  )
}