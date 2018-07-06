import React from 'react';
import './FavoritesButton.css';

export const FavoritesButton = ({ viewFavorites }) => {
  return (
    <button className="favorites" onClick={viewFavorites}>
      favorites
    </button>
  )
}