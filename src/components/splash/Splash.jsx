import React from 'react';
import styled from 'styled-components';

//TODO: webpack config to improve path resolution
import grow from '../../styles/animations/grow';

// embed logo as svg - https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs
import { ReactComponent as Logo } from '../../images/logo.svg';


//TODO: evaluate styled-components vs emotion vs other
// https://www.reddit.com/r/reactjs/comments/atlaln/fairly_mature_product_phasing_out_styled/
// https://medium.com/styled-components/announcing-styled-components-v4-better-faster-stronger-3fe1aba1a112
// https://twitter.com/_philpl/status/1125787442685071360?s=21
// https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21
// https://github.com/styled-components/styled-components/issues/2411
// https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54

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