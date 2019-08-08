import { getData } from 'service/Service';
import log from 'loglevel';

let peopleByURL = new Map();

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

        if (peopleByURL.has(url)) {
            log.info('using cached person');
            let person = peopleByURL.get(url);

            resolve(person);

        } else {
            getData(url).then( person => {

                let formattedHeight = person.height;

                // if numeric, some heights may be 'unknown'
                if(!isNaN(person.height)) {
                    formattedHeight = parseInt(person.height, 10);
                }

                // store height as a number if possible
                let formattedPerson = {
                    ...person,
                    height: formattedHeight
                };

                peopleByURL.set(url, formattedPerson);

                resolve(formattedPerson);
            }).catch(error => {
                reject(new Error("unable to retrieve person " + url));
            });;
        }
      });

      return promise;
};