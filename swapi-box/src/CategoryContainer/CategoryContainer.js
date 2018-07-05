import React from 'react';
import { Card } from '../Card/Card';
import './CategoryContainer.css'

export const CategoryContainer = ({ category }) => {
  const categoryCards = category.map(item => {
    return (
      <Card
        name={item.name}
        species={item.species}
        language={item.language}
        population={item.population}
      />
    )
  })
  return (
    <section className="category-container">
    { category.length ? categoryCards : '' }
    </section>
  )
}