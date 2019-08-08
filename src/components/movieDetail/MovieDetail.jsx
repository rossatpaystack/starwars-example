import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { getFilm } from 'service/FilmService';
import log from 'loglevel';

import MovieCrawl from 'components/movieDetail/MovieCrawl';
import MoviePeople from 'components/people/MoviePeople';
import ErrorMessage from 'components/error/ErrorMessage';

const Container = styled.section`
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  z-index:4
`;

const MovieDetail = (props) => {
    const { match: { params } } = props
    let id = params.id;

    const [state, setState] = useState({
        film: {},
        loaded: false
    });
    const [error, setError] = useState(false);

    // log.debug('MovieDetail: %s, %o', id, film);

    useEffect(() => {
        getFilm(id).then( film => {
            // setFilm(film);

            setState({
                ...state,
                film,
                loaded: true
            })
        }).catch(error => {
            log.error(error);
            setError(true);
        });
      }, [props, state.film]);

      let film = state.film;

    return (
        <Container>
            <h1>{film.title}</h1>
            <MovieCrawl film={film}></MovieCrawl>
            <MoviePeople film={film}></MoviePeople>

            {error &&
                <h2>
                <ErrorMessage/>
                </h2>
            }
        </Container>
    );
};

export default MovieDetail;