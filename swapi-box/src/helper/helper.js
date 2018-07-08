export class helper {
  constructor() {

  }

  pickFilmIntro = (films) => {
    const filmNumber = Math.floor(Math.random() * 6) + 2;
    const randomFilm = films.results.find(film => {
      return film.episode_id === filmNumber
    })
    return {  intro: randomFilm.opening_crawl,
              title: randomFilm.title,
              releaseDate: randomFilm.release_date
            }
  }

  cleanPeople = (people) => {
    console.log(people)
  const starPeople = people.results.map(person => {
      return {
          name: person.name,
          homeworld: person.homeworld,
          species: person.species[0],
          language: person.species[0],
          population: person.homeworld
      }
    });
    return starPeople
  }

  cleanPlanetData = (planets) => {
    const planetInfo = planets.results.reduce((planetList, planet) => {
    const cleanedPlanet = {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }
    planetList.push(cleanedPlanet)
    return planetList
    }, [])
    return planetInfo
  }

  cleanVehicles = (vehicles) => {
  const vehicleInfo = vehicles.results.map(vehicle => {
    return { name: vehicle.name,
             model: vehicle.model,
             classType: vehicle.vehicle_class,
             passengerNumber: vehicle.passengers
           }
    })
  return vehicleInfo;
  }

}
