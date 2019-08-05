import React, {lazy} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import LoadingComponent from 'components/loading/LoadingComponent';

import App from 'App';

const MovieDetail = lazy(() => import('components/movieDetail/MovieDetail'));


const routing = (
  <Router>
    <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/film/:id" component={LoadingComponent(MovieDetail)} />
    </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
