import React, { Component } from 'react';
import './FavoritesButton.css';

export class FavoritesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: 0
    }
  }

  viewFavorites = () => {
    
  }

  render() {
    return(
      <div className="favorites">
          <button className="favorite-button" 
            onClick={this.viewFavorites}>
            favorites
          </button>
        <span className="favorites-count"> {this.state.favorites}</span>
      </div>
     )
  }
}