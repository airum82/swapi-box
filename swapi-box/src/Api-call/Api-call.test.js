import { apiHelper } from './Api-call.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('Api calls', () => {
    let ApiHelper = new apiHelper();
    let mockCleanPeople
    let mockPeople
    let mockSetStateData
    let retrieveHomeworld
    let retrieveSpecies
  describe('viewPeople api call', () => {
    beforeEach(() => {
      mockPeople = [ { name: 'Solo', homeworld: 'https://swapi.co/api/people/'}, 
                     { name: 'Jimmy', homeworld: 'https://swapi.co/api/people/'} 
                    ]
      retrieveHomeworld = jest.fn().mockImplementation(
        () => Promise.resolve(mockPeople)
      );
      retrieveSpecies = jest.fn().mockImplementation(
        () => Promise.resolve(mockPeople));
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      }))
    })

    it('Should call fetch with correct parameters', () => {
      mockCleanPeople = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      }));
      mockSetStateData = jest.fn()
      //the above should be in a before block
      const expectedApi = 'https://swapi.co/api/people/';
      ApiHelper.viewPeople(mockCleanPeople, mockSetStateData);

      expect(window.fetch).toHaveBeenCalledWith(expectedApi);
    })

    it('setStateData should be called with correct params', () => {
      mockSetStateData = jest.fn().mockImplementation(() => console.log('data'))
      mockCleanPeople = jest.fn().mockImplementation(
        () => {
          console.log('people')
          return Promise.resolve(mockPeople)}
      )
        ApiHelper.viewPeople(mockCleanPeople, 
                             mockSetStateData,
                             retrieveHomeworld,
                             retrieveSpecies);
        expect.assertions(1)
        expect(mockSetStateData).toHaveBeenCalledWith(mockPeople);
    })

    it('should receive an error message it fetch block fails', () => {
      // ApiHelper = new apiHelper();
      // mockPeople = [{ name: 'Solo', home: 'falcon'}, { name: 'Jimmy', home: 'Detroit'} ]
      mockSetStateData = jest.fn().mockImplementation((error) => error);
      mockCleanPeople = jest.fn().mockImplementation(
        () => {
          console.log('people')
          return Promise.resolve(mockPeople)}
      )
      window.fetch = jest.fn().mockImplementation(
        () => Promise.reject(new Error('failed')))
      //the above here should also be in a beforeEach
        ApiHelper.viewPeople(mockCleanPeople, 
                             mockSetStateData,
                             retrieveHomeworld,
                             retrieveSpecies);
    expect(mockSetStateData).toHaveBeenCalledWith('failed')
    })
    //test retrieve nested homeworld and species one
  })
  //test if fetch is called and output
  describe('retrieveNestedHomeworld', () => {
    let url;
    let mockPeople;
    beforeEach(() => {
      url = 'https://swapi.co/api/people/';
      mockPeople = [ { name: 'Solo', homeworld: 'https://swapi.co/api/people/'}, 
                     { name: 'Jimmy', homeworld: 'https://swapi.co/api/people/'} 
                    ]
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      }))
    })

    it('should call fetch with correct parameters', () => {
      ApiHelper.retrieveNestedHomeworld(mockPeople)

      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return a single Promise', () => {
      url = "https://swapi.co/api/planets/1/";
      const mockHomeworldInfo = [ { homeworld: "Tatooine",
                                    population: "200000" },
                                  { homeworld: "Tatooine",
                                    population: "200000" }
                                ]
      const expectedOutput = Promise.all(mockHomeworldInfo)
      expect(ApiHelper.retrieveNestedHomeworld(mockPeople))
      .toEqual(expectedOutput)
    })
  })

  describe('retrieveNestedSpecies', () => {
    let url;
    let mockPeople;
    beforeEach(() => {
      url = "https://swapi.co/api/species/1/";
      mockPeople = [ { name: 'Luke', species : "https://swapi.co/api/species/1/"},
                     { name: 'Obi', species: "https://swapi.co/api/species/1/"}
                   ];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      }))
    })

    it('should call fetch with correct parameters', () => {
      ApiHelper.retrieveNestedSpecies(mockPeople)

      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return a single Promise', () => {
      url = "https://swapi.co/api/species/1/";
      const mockSpeciesInfo = [ { species: 'Human', language: "Galactic Basic"},
                              { species: 'Human', language: "Galactice Basic"}
                            ];
      const expectedOutput = Promise.all(mockSpeciesInfo);
      expect(ApiHelper.retrieveNestedSpecies(mockPeople))
      .toEqual(expectedOutput)
    })
  })

  describe('fetchPlanets', () => {
    let cleanPlanets;
    let setPlanetInfo;
    beforeEach(() => {

    })
  })
})

















