export class apiHelper {
  constructor() {

  }

  viewPeople = (cleanPeople, 
    setStateData, 
    retrieveHomeworld, 
    retrieveSpecies) => {
    const retrieveNestedHomeworld = retrieveHomeworld || this.retrieveNestedHomeworld
    const retrieveNestedSpecies = retrieveSpecies || this.retrieveNestedSpecies
    const url = 'https://swapi.co/api/people/';
    fetch(url)
    .then(response => response.json())
    .then(result => cleanPeople(result))
    .then(people => retrieveNestedHomeworld(people))
    .then(people => retrieveNestedSpecies(people))
    .then(cleanPeople => setStateData(cleanPeople, cleanPeople[0]))
    .catch(error => setStateData(error.message))
  }

  retrieveNestedHomeworld = (people) => {
    console.log('homeworld')
    const promiseGroup = people.map( person => {
      return (
        window.fetch(person.homeworld)
        .then(response => response.json())
        .then(result => ({
                          homeworld: result.name,
                          population: result.population
                        }))
        .then(data => ({...person, ...data}))
      )
    });
    return Promise.all(promiseGroup)
  }

  retrieveNestedSpecies = (people, getSpeciesData) => {
    console.log('species')
    const promiseGroup = people.map( person => {
      return (
        fetch(person.species)
        .then(response => response.json())
        .then(result => ({
                          species: result.name,
                          language: result.language
                        }))
        .then(data => ({...person, ...data}))
      )
    });
    return Promise.all(promiseGroup)
  }

  fetchPlanets = (cleanPlanets, setPlanetInfo) => {
    const url = 'https://swapi.co/api/planets';
    fetch(url)
    .then(response => response.json())
    .then(result => cleanPlanets(result))
    .then(firstResult => this.retrievePlanetResidents(firstResult))
    .then(cleanedResult => setPlanetInfo(cleanedResult, cleanedResult[0]))
    .catch(error => console.log(error.message));
  }

  retrievePlanetResidents = (planets) => {
    const citizens = planets.map( planet => {    
        return this.fetchResidents(planet.residents)
               .then(names => ({...planet, residents : names}))
      })
    return Promise.all(citizens);
  }

  fetchResidents = (residents) => {
    const fetchedResidents = residents.map( resident => {
      return fetch(resident)
             .then(response => response.json())
             .then(result => result.name)
             .catch(error => console.log(error.message))
          });
    return Promise.all(fetchedResidents);
  }

  fetchVehicles = (cleanVehicles, setVehicleState) => {
    const url = 'https://swapi.co/api/vehicles';
    fetch(url)
    .then(response => response.json())
    .then(result => cleanVehicles(result))
    .then(cleanedData => setVehicleState(cleanedData, cleanedData[0]))
  }
}