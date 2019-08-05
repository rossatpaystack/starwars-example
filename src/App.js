import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import * as log from 'loglevel';

import Splash from 'components/splash/Splash';

function App() {
  log.setLevel('trace');
  return (
    <div className="App">
      <Splash></Splash>
    </div>
  );
}

export default App;
