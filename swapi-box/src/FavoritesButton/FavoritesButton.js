import React, { Component } from 'react';
import './FavoritesButton.css';
import PropTypes from 'prop-types'

export class FavoritesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: 0
    }
  }

  viewFavorites = () => {
    console.log('favorite')
    
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