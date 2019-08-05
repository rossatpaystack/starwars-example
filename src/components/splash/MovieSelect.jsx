import React from 'react'
import { Select } from 'semantic-ui-react'
import log from 'loglevel';

import { withRouter } from "react-router";

const handleOnChange = (e, data, history) => {
    log.debug('selected film: %s', data.value);

    history.push(`/film/${data.value}`)
}

const MovieSelect = withRouter(({history, ...props}) => {
    let films = props.films;

    let sorted = films.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

    log.debug('sorted films: %o', sorted);
    
    let options = [];
    sorted.forEach(function(film) {
        options.push({
            key: film.episode_id,
            value: film.episode_id,
            text: film.title,
        })
    })

    return (
        <Select placeholder='Choose a movie' options={options} onChange={(e, data)=> handleOnChange(e, data, history)}/>
    );
});

export default withRouter(MovieSelect);