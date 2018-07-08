import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { CategoryContainer } from './CategoryContainer';

describe("CategoryContainer", () => {
  it('should match snapshot upon initial render', () => {
    const wrapper = shallow(<CategoryContainer
                      category={[]}
                    />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when category has length and first item has a species key', () => {
    const mockCategory = [ { species: 'asdfsa',
                             name: 'leonard'},
                           { species: 'asdfasdf',
                             name: 'theo'}
                         ]
    const wrapper = shallow(<CategoryContainer
                      category={mockCategory}
                    />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when category has length and first item has a residents key', () => {
    const mockCategory = [ { residents: [],
                             population: 4000},
                           { residents: [],
                             population: 49595}
                          ];
    const wrapper = shallow(<CategoryContainer
                             category={mockCategory}
                            />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when category container has length', () => {
    const mockCategory = [{ kind: 'does not matter'}, 
                          { kind: 'still does not'}
                         ];
    const wrapper = shallow(<CategoryContainer
                             category={mockCategory}
                            />);
    expect(wrapper).toMatchSnapshot();
  })
})