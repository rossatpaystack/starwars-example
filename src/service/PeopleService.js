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
            });
        }
      });

      return promise;
};

let byID = (people, id) => {
    // log.debug('byID: %s', id)
    console.log('byID: ' + people.length);
    return people.filter(obj => {
        // log.debug('filter %o', obj);
        // eslint-disable-next-line eqeqeq
        return obj['episode_id'] == id;
    })[0];
}


//determine film id: href.split('/');
export const byFilm = async(film) => {

        let promises = [];

        let characters = [];
        // film.characters.forEach(async(url) => {
        for (const url of film.characters) {
            //"https://swapi.co/api/people/8/"

            promises.push(getPerson(url));

            /*
            const person = await getPerson(url);
            console.log('person: %s', person)
            characters.push(person);
            */
        }

        let results = await Promise.all(promises);


        return results;

        // resolve(characters);
    // });
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
            });
        }
      });

      return promise;
};