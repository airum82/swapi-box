import { helper } from './helper';
import { films } from './sw-film-data';
import { people, cleanedPeople } from './sw-people-data';

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

  it('cleanPeople should return an array of people object', () => {
    
    expect(cleaner.cleanPeople(people)).toEqual(cleanedPeople);
  })
})