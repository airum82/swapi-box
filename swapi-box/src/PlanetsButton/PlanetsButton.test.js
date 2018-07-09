import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { PlanetsButton } from './PlanetsButton';

describe('PlanetsButton', () => {

  it('should match snapshot upon render', () => {
    const wrapper = shallow(<PlanetsButton
                            />)
    expect(wrapper).toMatchSnapshot();
  })

  it('fetchPlanets should be invoked upon click', () => {
    const mockFetchPlanets = jest.fn()
    const wrapper = shallow(<PlanetsButton
                              fetchPlanets={mockFetchPlanets}
                              retrieveData={jest.fn()}
                              cleanPlanetData={jest.fn()}
                            />)
    wrapper.simulate('click');
    expect(mockFetchPlanets).toHaveBeenCalled();
  })
})