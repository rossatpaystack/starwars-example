import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import grow from 'styles/animations/grow';
import log from 'loglevel';

// embed logo as svg - https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs
import { ReactComponent as Logo } from 'images/logo.svg';

import {Stars, Twinkling} from 'styles/backgrounds/stars';
import MovieSelect from './MovieSelect';
import {getFilms} from 'service/FilmService';

import ErrorMessage from 'components/error/ErrorMessage';


const StarBackground = styled.section`
    ${Stars}
`;

const TwinkleBackground = styled.section`
    ${Twinkling}
`;

const Container = styled.section`
  margin-top:10px;
  text-align: center;
  // min-height: 80vh;
  height:500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StyledLogo = styled(Logo)`
    fill:#ffd700
    z-index:3;

    ${grow}
`;

const Splash = () => {

  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
  
    getFilms().then( films => {
      let sorted = films.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      setFilms(sorted);
    }).catch(error => {
      log.error(error);
      setError(true);
    });
    
  }, []);

  return (
    <div>
      <StarBackground>
        <TwinkleBackground>
        </TwinkleBackground>
      </StarBackground>
 
      <Container>
        <StyledLogo  />
        <MovieSelect films={films}/>
      </Container>

      {error &&
        <h2>
          <ErrorMessage />
        </h2>
      }
    </div>
  );
};

export default Splash;