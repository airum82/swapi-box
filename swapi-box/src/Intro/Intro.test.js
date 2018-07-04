import React from 'react';
import { Intro } from './Intro';
import { shallow } from 'enzyme';

describe('Intro component', () => {
  it('should match the snapshot upon render', () => {
    const wrapper = shallow(<Intro 
                              intro={{}}
                            />);
    expect(wrapper).toMatchSnapshot();
  })
})