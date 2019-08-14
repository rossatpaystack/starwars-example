import React, { useState, useEffect } from 'react'
import log from 'loglevel';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

import PeopleTable from './PeopleTable';
import PeopleFilter from 'components/people/PeopleFilter';

import { byFilm } from 'service/PeopleService';

const Container = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  z-index:4;
  clear:both
`;

const MoviePeople = (props) => {

  const [state, setState] = useState({
    characters: [],
    genders: [],
    loaded: false,
    selectedGender: props.gender
});

  useEffect(() => {
    setState({
      ...state,
      loaded: false
    });
    let film = props.film;
    if (film && film.characters) {
      byFilm(film).then(function(characters) {

        let genders = [...new Set(characters.map(character => character.gender))];

        log.debug('genders: %o', genders);

        if (state.selectedGender) {
          log.debug('filter by selectedGender');

          characters = characters.filter(characters => characters.gender === props.gender);
        }

        setState({
          ...state,
          genders,
          characters,
          loaded: true
        })

      //  log.debug('MoviePeople characters: %o', characters)
      });
    }
  }, [props.film, props.gender]);

    let genders = state.genders;
    let loaded = state.loaded;
    let characters = state.characters;
    let selectedGender = state.selectedGender;

    return (
        <Container>
            {loaded ? (
              <>
                <h1>Characters</h1>
                <PeopleFilter film={props.film} genders={genders} selected={selectedGender} />
                <PeopleTable film={props.film} characters={characters} />
              </>
            ) : (
              <Spinner name="line-scale" />
            )}
        </Container>
    );
};

export default MoviePeople;