import React from 'react';
import { shallow, mount } from 'enzyme';
import { FavoritesButton } from './FavoritesButton';

describe('FavoritesButton', () => {
  it('Should match snapshot upon render', () => {
    const wrapper = shallow(<FavoritesButton
                            />);

    expect(wrapper).toMatchSnapshot();
  })

  it('Should invoke the viewFavorites function on click', () => {
    const wrapper = shallow(<FavoritesButton
                            />);

    wrapper.viewFavorites = jest.fn();

    wrapper.find('.favorite-button').simulate('click');
    expect(wrapper.viewFavorites).toHaveBeenCalled();
  })
})