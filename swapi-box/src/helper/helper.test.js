import { helper } from './helper';
import { films } from './sw-film-data';
import { people, cleanedPeople } from './sw-people-data';
import { planets, cleanedPlanets } from './sw-planet-data.js';

describe('helper methods', () => {
  let cleaner
  beforeEach(() => {
    cleaner = new helper();
  })

  it('should return a random film intro each time', () => {
    const justIntros = films.results.map( film => {
      return film.opening_crawl;
    })

    const chosenIntro = cleaner.pickFilmIntro(films)

    expect(chosenIntro.intro).toEqual(justIntros.find( intro => intro === chosenIntro.intro));
  })

  it('cleanPeople should return an array of simplified people objects', () => {
    expect(cleaner.cleanPeople(people)).toEqual(cleanedPeople);
  })

  it('cleanPlanetData should return an array of simplified planet objects', () => {
    expect(cleaner.cleanPlanetData(planets)).toEqual(cleanedPlanets);
  })

  it('')
})