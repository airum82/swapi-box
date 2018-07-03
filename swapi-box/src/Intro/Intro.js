import React from 'react';
import './Intro.css';

export const Intro = ({ intro }) => {
  return (
    <aside className="intro">
     <p>{intro.intro}</p>
     <h3>{intro.title}</h3>
     <h5>{intro.releaseDate}</h5>
    </aside>
  )
}