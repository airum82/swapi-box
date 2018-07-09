import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { VehiclesButton } from './VehiclesButton';

describe('VehicleButton', () => {

  it('should match snapshot upon render', () => {
    const wrapper = shallow(<VehiclesButton 
                            />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke the fetchVehicles function upon click', () => {
    const mockFetchVehicles = jest.fn();
    const wrapper = shallow(<VehiclesButton
                             fetchVehicles={mockFetchVehicles}
                             cleanVehicles={jest.fn()}
                             retrieveVehicles={jest.fn()}
                            />);
    wrapper.simulate('click');
    expect(mockFetchVehicles).toHaveBeenCalled();
  })
})