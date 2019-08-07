import { getData } from 'service/Service';
import log from 'loglevel';

const URL = 'https://swapi.co/api/people';

let people = [];
let loaded = false;

export const getPeople = () => {

    var promise = new Promise(function(resolve, reject) {

        if (loaded) {
            log.info('using cached films');

            resolve(people);

        } else {
            getData(URL).then( response => {
                people = [];
                response.results.forEach((character) => {
                    people.push(character);
                });

                loaded = true;

                log.info("fetched %s people: %o", people.length, people);
                resolve(people);
            }).catch(error => {
                reject(new Error("unable to retrieve people"));
            });;
        }
      });

      return promise;
};

export const byFilm = async(film) => {

        let promises = [];

        for (const url of film.characters) {
            //"https://swapi.co/api/people/8/"

            promises.push(getPerson(url));
        }

        let results = await Promise.all(promises);

        return results;
}

export const getPerson = (url) => {

    var promise = new Promise(function(resolve, reject) {

        if (false) {
            log.info('using cached films');
            let person = null;

            resolve(person);

        } else {
            getData(url).then( person => {
                resolve(person);
            }).catch(error => {
                reject(new Error("unable to retrieve person " + url));
            });;
        }
      });

      return promise;
};