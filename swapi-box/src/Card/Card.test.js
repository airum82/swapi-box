import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card component', () => {
  it('Should match snapshot upon render', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  })
})