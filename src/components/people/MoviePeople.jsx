import React, { useState, useEffect } from 'react'
import log from 'loglevel';
import styled from 'styled-components';
import { getFilm } from 'service/FilmService';
import PeopleTable from './PeopleTable';

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
  // log.debug('MoviePeople film: %o', props.film);

    useEffect(() => {

      }, []);

    return (
        <Container>
            <h1>Characters</h1>
            <PeopleTable film={props.film} />
        </Container>
    );
};

export default MoviePeople;