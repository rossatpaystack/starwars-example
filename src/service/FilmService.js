import { getData } from 'service/Service';
import log from 'loglevel';

const URL = 'https://swapi.co/api/films';

let films = [];

export const getFilms = () => {

    var promise = new Promise(function(resolve, reject) {

        if (films.length > 0) {
            log.info('using cached films');

            resolve(films);

        } else {
            getData(URL).then( response => {
                films = [];
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
        }
      });

      return promise;
};

let byID = (films, id) => {
    // log.debug('byID: %s', id)
    return films.filter(obj => {
        // log.debug('filter %o', obj);
        return obj['episode_id'] == id;
    })[0];
}

export const getFilm = (id) => {
    // log.debug('getFilm: %s', id);
    var promise = new Promise(function(resolve, reject) {
        // log.debug('films.length: %s', films.length);
        if (films.length > 0) {
            resolve(byID(films, id));

        } else {
            getFilms().then( films => {
                resolve(byID(films, id));
            });
        }
    });

    return promise;
};
