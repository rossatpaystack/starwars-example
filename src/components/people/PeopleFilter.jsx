import React from 'react'
import { Select } from 'semantic-ui-react'

import { withRouter } from "react-router";

const handleOnChange = (e, data, history, film) => {
  let filmId = film.episode_id;
  let gender = data.value;

  history.push(`/film/${filmId}/characters/${gender}`)
}

const PeopleFilter = React.memo(withRouter(({history, ...props}) => {
  let film = props.film;

  let genders = props.genders;

  let options = [];
  genders.forEach(function(gender) {
      options.push({
          key: gender,
          value: gender,
          text: gender,
      })
  })

  return (
      <Select placeholder='Filter by gender' options={options} onChange={(e, data)=> handleOnChange(e, data, history, film)}/>
  );
}));

export default withRouter(PeopleFilter);