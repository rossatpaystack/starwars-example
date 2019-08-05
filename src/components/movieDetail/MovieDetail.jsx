import React, { useState, useEffect } from 'react'
import log from 'loglevel';
import styled from 'styled-components';
import { getFilm } from 'service/FilmService';

import MovieCrawl from 'components/movieDetail/MovieCrawl';

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

    const [film, setFilm] = useState({});

    // log.debug('MovieDetail: %s, %o', id, film);

    useEffect(() => {
        getFilm(id).then( film => {
            setFilm(film);

            // log.debug('getFilm: %o', film)
        });
      }, [id]);

    // log.debug('film: %o', film);
    return (
        <Container>
            <h1>{film.title}</h1>
            <MovieCrawl film={film}></MovieCrawl>
        </Container>
    );
};

export default MovieDetail;