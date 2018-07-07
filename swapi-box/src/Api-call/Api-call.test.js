import { apiHelper } from './Api-call.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('Api calls', () => {

  describe('viewPeople api call', () => {
    let mockEvent
    let ApiHelper
    let mockCleanPeople
    let mockPeople
    let mockSetData

    it('Should call fetch with correct parameters', () => {
      ApiHelper = new apiHelper();
      mockEvent = { preventDefault: jest.fn() }
      mockCleanPeople = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPerson)
      }))
      mockSetData = jest.fn()
      mockPeople = [{ name: 'Solo', home: 'falcon'}, { name: 'Jimmy', home: 'Detroit'} ]
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      }))
      //the above should be in a before block
      const expectedApi = "https://swapi.co/api/people/";
      ApiHelper.viewPeople(mockCleanPeople, mockSetData);

      expect(window.fetch).toHaveBeenCalledWith(expectedApi);
    })
  })
})
