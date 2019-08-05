import React from 'react';
import ReactDOM from 'react-dom';
import MovieCrawl from 'components/movieDetail/MovieCrawl';

it('renders without crashing', () => {
  const div = document.createElement('div');

    let film = {
        title: 'test test'
    }

  ReactDOM.render(<MovieCrawl film={film} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
