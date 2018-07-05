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

  cleanPeople = (people, fetchHomeworld) => {
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

  getHomeworldData = (homeworld) => {
    const homeworldInfo = {
      homeworld: homeworld.name,
      population: homeworld.population
    };
    return homeworldInfo;
  }

  getSpeciesData = (species) => {
    const speciesData = {
    species: species.name,
    language: species.language
    }
    return speciesData
  }


}
