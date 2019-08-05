import { getData } from 'service/Service';
import log from 'loglevel';

const URL = 'https://swapi.co/api/films';

export const getFilms = () => {

    var promise = new Promise(function(resolve, reject) {

        let films = [];
        getData(URL).then( response => {

            response.results.forEach((film) => {
                films.push(film);
            });

            if (films.length > 0) {
                log.info("fetched %s films: %o", films.length, films);
                resolve(films);
              }
              else {
                reject(Error("unable to retrieve films"));
              }
        });
      });

      return promise;
};

