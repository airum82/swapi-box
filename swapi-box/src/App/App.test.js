import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot upon initial render', () => {
    const wrapper = shallow(<App/>, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  })

  it('reset state should reset the state to state upon render', () => {
    const wrapper = shallow(<App/>, { disableLifecycleMethods: true });
    const initialState = wrapper.state();
    wrapper.instance().setState({ planets: ['Venus', 'Mercury', 'Saturn'],
                                  vehicles: ['Audi', 'Prius'] });
    wrapper.instance().resetState();

    expect(wrapper.state()).toEqual(initialState);
  })

  it('retrieve data should call resetState', () => {
    const wrapper = shallow(<App/>, { disableLifecycleMethods: true });
    const mockData = ['this', 'that', 'some']
    wrapper.instance().resetState = jest.fn();
    wrapper.instance().retrieveData(mockData, mockData[0]);
    expect(wrapper.instance().resetState).toHaveBeenCalled();
  })

  it('retrieveData should call determineCategory with correct params', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true});
    const mockData = ['this', 'that', 'some']
    wrapper.instance().determineCategory = jest.fn();
    wrapper.instance().retrieveData(mockData, mockData[0]);
    expect(wrapper.instance().determineCategory).toHaveBeenCalledWith(mockData[0]);
  })

  it('favoriteCard should call determine category with correct params', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true});
    wrapper.instance().determineCategory = jest.fn();
    wrapper.instance().setState({ planets: ['whatever', 'wherever'] });
    const mockProps = {name: 'asdas',
                       residents: 'rocky'};
    wrapper.instance().favoriteCard(mockProps);
    expect(wrapper.instance().determineCategory).toHaveBeenCalledWith(mockProps)

  })
  
})

