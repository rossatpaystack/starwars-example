import React from 'react'
import { Select } from 'semantic-ui-react'
import log from 'loglevel';

import { withRouter } from "react-router";

const handleOnChange = (e, data, history, film) => {
  let filmId = film.episode_id;
  let gender = data.value;

  history.push(`/film/${filmId}/characters?gender=${gender}`)
}

const PeopleFilter = withRouter(({history, ...props}) => {
  let film = props.film;

  let genders = props.genders;
  log.debug('PeopleFilter props: %o', props)

  let options = [];
  genders.forEach(function(gender) {
      options.push({
          key: gender,
          value: gender,
          text: gender,
      })
  })

  return (
      <Select placeholder='Filter by gender' defaultValue={props.selected}  options={options} onChange={(e, data)=> handleOnChange(e, data, history, film)}/>
  );
});

export default withRouter(PeopleFilter);