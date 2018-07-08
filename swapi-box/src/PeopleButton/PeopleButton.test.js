import React, { Component } from 'react';
import { PeopleButton } from './PeopleButton';
import { shallow } from 'enzyme';

describe('PeopleButton', () => {
  it('should match snapshot upon render', () => {
    const wrapper = shallow(<PeopleButton
                             viewPeople={jest.fn()}
                             cleanPeople={jest.fn()}
                             retrieveData={jest.fn()}
                            />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke viewPeople function upon click', () => {
    const mockViewPeople = jest.fn().mockImplementation(
      (cleanPeople, retrieveData) => 'invoked')
    const mockCleanPeople = jest.fn();
    const mockRetrieveData = jest.fn();
    const wrapper = shallow(<PeopleButton
                             viewPeople={mockViewPeople}
                             cleanPeople={jest.fn()}
                             retrieveData={jest.fn()}
                            />);
    wrapper.simulate('click');
    expect(mockViewPeople).toHaveBeenCalled();
  })
})