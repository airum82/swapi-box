import React from 'react';
import { Card } from '../Card/Card';
import './CategoryContainer.css'

export const CategoryContainer = ({ category }) => {
  let categoryCards;
  if(category.length && Object.keys(category[0]).includes('species')) {
    categoryCards = category.map(item => {
    return (
      <Card
        name={item.name}
        species={item.species}
        language={item.language}
        population={item.population}
      />
    )}
  )} else if(category.length && Object.keys(category[0]).includes('residents')) {
      categoryCards = category.map(item => {
        return (
        <Card
          name={item.name}
          population={item.population}
          terrain={item.terrain}
          climate={item.climate}
          residents={item.residents}
        />
      )}
    )}
  return (
    <section className="category-container">
    { categoryCards ? categoryCards : ''}
    </section>
  )
}