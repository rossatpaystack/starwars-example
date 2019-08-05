import { getData } from 'service/Service';
import log from 'loglevel';

const URL = 'https://swapi.co/api/people';

let people = [];

export const getPeople = () => {

    var promise = new Promise(function(resolve, reject) {

        if (people.length > 0) {
            log.info('using cached films');

            resolve(people);

        } else {
            getData(URL).then( response => {
                people = [];
                response.results.forEach((people) => {
                    people.push(people);
                });
    
                if (people.length > 0) {
                    log.info("fetched %s people: %o", people.length, people);
                    resolve(people);
                  }
                  else {
                    reject(Error("unable to retrieve people"));
                  }
            });
        }
      });

      return promise;
};

let byID = (people, id) => {
    // log.debug('byID: %s', id)
    return people.filter(obj => {
        // log.debug('filter %o', obj);
        return obj['episode_id'] == id;
    })[0];
}


//determine film id: href.split('/');
export const byFilm = (film) => {
    let characters = [];
    return film.characters.forEach((url) => {
        //"https://swapi.co/api/people/8/"

        // e.g. ["https:", "", "swapi.co", "api", "people", "8", ""]
        let array = url.split('/');
        let id = array[array.length-2];

        log.debug('id: %s, %o', id, array);
        //todo: get character by id

        characters.push(id);
    });

}

export const getPerson = (id) => {
    // log.debug('getFilm: %s', id);
    var promise = new Promise(function(resolve, reject) {
        // log.debug('films.length: %s', films.length);
        if (people.length > 0) {
            resolve(byID(people, id));

        } else {
            getPeople().then( people => {
                resolve(byID(people, id));
            });
        }
    });

    return promise;
};
