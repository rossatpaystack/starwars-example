import React from 'react';

//TODO: webpack config to improve path resolution

// embed logo as svg - https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs
import { ReactComponent as Logo } from '../../images/logo.svg';

const Splash = () => {

  return (
    <div className="splash">
        <Logo className="logo" />
    </div>
  );
};

export default Splash;