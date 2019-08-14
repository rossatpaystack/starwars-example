import React, {lazy} from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import log from 'loglevel';

import LoadingComponent from 'components/loading/LoadingComponent';

import Splash from 'components/splash/Splash';

const MovieDetail = lazy(() => import('components/movieDetail/MovieDetail'));

log.setLevel('trace');

const routing = (
  <Router>
    <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/film/:id/characters" component={LoadingComponent(MovieDetail)} />
      <Route path="/film/:id" component={LoadingComponent(MovieDetail)} />
    </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
