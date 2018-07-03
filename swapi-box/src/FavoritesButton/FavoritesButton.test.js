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

  it('Should click invoke the viewFavorites function on click', () => {
    const mockViewFavorites = jest.fn();
    const wrapper = shallow(<FavoritesButton
                            viewFavorites={mockViewFavorites}
                            />);
    wrapper.simulate('click');
    expect(mockViewFavorites).toBeCalled();
  })
})