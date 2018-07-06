export class apiHelper {
  constructor() {

  }

  fetchPlanets = (cleanPlanets, setPlanetInfo) => {
    const url = 'https://swapi.co/api/planets';
    fetch(url)
    .then(response => response.json())
    .then(result => cleanPlanets(result))
    .then(firstResult => this.retrievePlanetResidents(firstResult))
    .then(cleanedResult => setPlanetInfo(cleanedResult));
  }

  retrievePlanetResidents = (planets) => {
    const citizens = planets.map( planet => {    
        this.fetchResidents(planet.residents).then(names => planet.residents = names)
        return planet
      })
    return Promise.all(citizens);
  }

  fetchResidents = (residents) => {
    const fetchedResidents = residents.map( resident => {
      return fetch(resident)
             .then(response => response.json())
             .then(result => {
              return result.name;
             })
             .catch(error => console.log(error.message))
          });
    return Promise.all(fetchedResidents);
  }

  fetchVehicles = (cleanVehicles, setVehicleState) => {
    const url = 'https://swapi.co/api/vehicles';
    fetch(url)
    .then(response => response.json())
    .then(result => cleanVehicles(result))
    .then(data => setVehicleState(data))
  }
}