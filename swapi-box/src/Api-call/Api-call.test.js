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
        json: () => {
          return Promise.resolve(mockPeople)
          }
        })
      );
      mockSetStateData = jest.fn()
      const expectedApi = 'https://swapi.co/api/people/';
      ApiHelper.viewPeople(mockCleanPeople, mockSetStateData);

      expect(window.fetch).toHaveBeenCalledWith(expectedApi);
    })

    it('setStateData should be called with correct params', () => {
      mockSetStateData = jest.fn().mockImplementation((a , b) => {
        return Promise.resolve(mockPeople)
      })
        mockCleanPeople = jest.fn().mockImplementation(
        () => {
          return Promise.resolve(mockPeople)
        })
        ApiHelper.viewPeople(mockCleanPeople, 
                             mockSetStateData,
                             retrieveHomeworld,
                             retrieveSpecies);
        expect.assertions(1)
        expect(mockSetStateData).toHaveBeenCalled();
    })

    it('should receive an error message it fetch block fails', () => {
      mockSetStateData = jest.fn().mockImplementation((error) => error);
      mockCleanPeople = jest.fn().mockImplementation(
        () => {
          return Promise.resolve(mockPeople)}
      )
      window.fetch = jest.fn().mockImplementation(
        () => Promise.reject(new Error('failed')))
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
    let url;
    let mockCleanPlanets
    let mockSetPlanetInfo
    let retrievePlanetResidence;
    let fetchResidents
    beforeEach(() => {
      url = 'https://swapi.co/api/planets';

    })

    it('should call fetch with correct parameters', () => {
      mockCleanPlanets = jest.fn();
      mockSetPlanetInfo = jest.fn();
      let mockPlanetInfo = [ { planet: 'Venus'}, { planet: 'Mercury'} ];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPlanetInfo)
      }))

      ApiHelper.fetchPlanets(mockCleanPlanets, mockSetPlanetInfo);

      expect(window.fetch).toHaveBeenCalledWith(url)
    });

    it('should call cleanPlanets', () => {
    let mockPlanetInfo = [ { planet: 'Venus'}, { planet: 'Mercury'} ];
      mockCleanPlanets = jest.fn().mockImplementation((mockPlanetInfo) => {
        return Promise.resolve(mockPlanetInfo)
      });
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPlanetInfo)
      }))
      mockSetPlanetInfo = jest.fn()
      .mockImplementation((cleanedResult, firstCleaned) => {
        return;
      })

      ApiHelper.fetchPlanets(mockCleanPlanets, mockSetPlanetInfo);

      expect(mockCleanPlanets).toHaveBeenCalledWith(mockPlanetInfo);
    })
  })

  describe('retrievePlanetResidence', () => {
    let mockPlanetInfo;
    let url;
    beforeEach(() => {
      mockPlanetInfo = [ { planet: 'Venus', 
                           residents: [
                                        "https://swapi.co/api/people/5/",
                                        "https://swapi.co/api/people/68/",
                                        "https://swapi.co/api/people/81/"
                                      ]
                          }, { planet: 'Mercury',
                               residents: [
                                            "https://swapi.co/api/people/5/",
                                            "https://swapi.co/api/people/68/",
                                            "https://swapi.co/api/people/81/"
                                          ]
                              } 
                        ];
      url = "https://swapi.co/api/people/5/";
    })

    it('should call fetchPlanetResidents with the correct parameters', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
        { json : () => Promise.resolve(mockPlanetInfo)
      }));
      let mockNestedResidents = [ "https://swapi.co/api/people/5/",
                              "https://swapi.co/api/people/68/",
                              "https://swapi.co/api/people/81/" ]
      let mockFetchResidents = jest.fn().mockImplementation(() => {
        console.log('residents')
        Promise.resolve(mockNestedResidents)
      })

      ApiHelper.retrievePlanetResidents(mockPlanetInfo, mockFetchResidents)
      expect(mockFetchResidents).toHaveBeenCalledWith(mockPlanetInfo.residents)
    })
  })

  describe('fetchVehicles', () => {

    it('should call fetch with the correct parameters', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
        { json: () => Promise.resolve(mockVehicleInfo)}
      ));
      const url = 'https://swapi.co/api/vehicles';
      const mockVehicleInfo = [ { name : 'dasAuto',
                                classType: 'yaaaaa'},
                              { name: 'harley',
                                classType: 'shortLifespan'}];
      const mockCleanVehicles = jest.fn().mockImplementation((result) => 'cleaned');
      const mockSetVehicleState = jest.fn().mockImplementation((data) => 'data');
      ApiHelper.fetchVehicles(mockCleanVehicles, mockSetVehicleState);

      expect(window.fetch).toHaveBeenCalledWith(url)
      
    })
  })
})

















