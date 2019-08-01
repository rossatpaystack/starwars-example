import React from 'react';

// embed logo as svg - https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs
import { ReactComponent as Logo } from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="logo" />
      </header>
    </div>
  );
}

export default App;
