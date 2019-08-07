import { getData } from 'service/Service';
import log from 'loglevel';

const URL = 'https://swapi.co/api/films';
// const URL = 'http://localhost/films';

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
                    reject(new Error("unable to retrieve films"));
                  }
            }).catch(error => {
                reject(new Error("unable to retrieve films"));
            });
        }
      });

      return promise;
};

let byID = (films, id) => {
    return films.filter(obj => {
        // eqeq comparison since swapi uses strings

        // eslint-disable-next-line eqeqeq
        return obj['episode_id'] == id;
    })[0];
}

export const getFilm = (id) => {
    var promise = new Promise(function(resolve, reject) {
        if (films.length > 0) {
            resolve(byID(films, id));

        } else {
            getFilms().then( films => {
                resolve(byID(films, id));
            }).catch(error => {
                log.error('error getting film %s, %s', id, error);
                reject(new Error(error));
              });
        }
    });

    return promise;
};
