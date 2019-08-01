import React from 'react';
import styled from 'styled-components';

import grow from 'styles/animations/grow';

// embed logo as svg - https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs
import { ReactComponent as Logo } from 'images/logo.svg';

const Background = styled.section`
    text-align: center;
    background-color: #10141d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const StyledLogo = styled(Logo)`
    height: 40vmin;
    fill:#ffd700

    ${grow}
`;

const Splash = () => {

  return (
    <Background>
        <StyledLogo />
    </Background>
  );
};

export default Splash;