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


}
