
import { getFilm } from 'service/FilmService';
import { byFilm, getPerson } from 'service/PeopleService';

//todo: mock api calls

it('fetches a person', async () => {
  jest.setTimeout(5000);
  let url = 'https://swapi.co/api/people/1/';
  let person = await getPerson(url);

  expect(person).not.toBeNull();
  expect(person.name).toMatch("Luke Skywalker");

});

it('fetches characters', async () => {
  jest.setTimeout(5000);

  let id = 1;

  let film = await getFilm(id);
  expect(film).not.toBeNull();

  let characters = await byFilm(film);

  expect(characters).not.toBeNull();
  expect(characters.length).toBe(34);
});