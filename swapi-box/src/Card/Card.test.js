import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card component', () => {
  it('Should match snapshot upon render', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  })

  it('Should match snapshot when prop object has key of species', () => {
    const mockPerson = { name: 'Bob',
                         species: 'Ood',
                         language: 'telepathy',
                         population: 'lots'}
    const wrapper = shallow(<Card 
                              name={mockPerson.name}
                              species={mockPerson.species}
                              language={mockPerson.language}
                              population={mockPerson.population}
                            />)
    expect(wrapper).toMatchSnapshot();
  })

  it('Should match snapshot when prop object has a key of terrain', () => {
    const mockPlanet = { name: 'Galafrey',
                         population: 'varies',
                         terrain: 'mountainous',
                         climate: 'desert',
                         residents: ['timelords', 'galafreyins']
                       }
    const wrapper = shallow(<Card
                              name={mockPlanet.name}
                              population={mockPlanet.population}
                              terrain={mockPlanet.terrain}
                              climate={mockPlanet.climate}
                              residents={mockPlanet.residents}
                            />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should match snapshot when prop object has a key of terrain but no residents', () => {
    const mockPlanet = { name: 'Galafrey',
                         population: 'varies',
                         terrain: 'mountainous',
                         climate: 'desert',
                         residents: []
                       }
    const wrapper = shallow(<Card
                              name={mockPlanet.name}
                              population={mockPlanet.population}
                              terrain={mockPlanet.terrain}
                              climate={mockPlanet.climate}
                              residents={mockPlanet.residents}
                            />);
    expect(wrapper).toMatchSnapshot();
  })
})