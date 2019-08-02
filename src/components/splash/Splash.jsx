import React from 'react';
import styled from 'styled-components';

import grow from 'styles/animations/grow';

// embed logo as svg - https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs
import { ReactComponent as Logo } from 'images/logo.svg';

import {Stars, Twinkling} from 'styles/backgrounds/stars';


const StarBackground = styled.section`
    ${Stars}
`;

const TwinkleBackground = styled.section`
    ${Twinkling}
`;

const Container = styled.section`
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLogo = styled(Logo)`
    fill:#ffd700
    z-index:3

    ${grow}
`;

const Splash = () => {

  return (
    <div>
      <StarBackground>
        <TwinkleBackground>
        </TwinkleBackground>
      </StarBackground>
 
      <Container>
        <StyledLogo />
      </Container>
    </div>
  );
};

export default Splash;