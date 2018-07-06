import React from 'react';
import { Card } from '../Card/Card';
import './CategoryContainer.css'

export const CategoryContainer = ({ category }) => {
  let categoryCards;
  if(category.people.length) {
    categoryCards = category.people.map(item => {
    return (
      <Card
        name={item.name}
        species={item.species}
        language={item.language}
        population={item.population}
      />
    )}
  )}
  return (
    <section className="category-container">
    { categoryCards ? categoryCards : ''}
    </section>
  )
}