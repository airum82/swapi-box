import React from 'react';
import './Intro.css';
import PropTypes from 'prop-types';

export const Intro = ({ intro }) => {
  return (
    <aside className="intro slide-up">
      <div>
        <p>{intro.intro}</p>
        <h3>{intro.title}</h3>
        <h5>{intro.releaseDate}</h5>
      </div>
    </aside>
  )
}

Intro.propTypes = {
  intro: PropTypes.object
}