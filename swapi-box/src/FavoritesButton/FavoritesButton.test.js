import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesButton } from './FavoritesButton';

describe('FavoritesButton', () => {
  it('Should match snapshot upon render', () => {
    const wrapper = shallow(<FavoritesButton
                            viewFavorites={jest.fn()}
                            />);

    expect(wrapper).toMatchSnapshot();
  })
})