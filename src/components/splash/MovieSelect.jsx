import React from 'react'
import { Select } from 'semantic-ui-react'
import log from 'loglevel';

import { withRouter } from "react-router";

const handleOnChange = (e, data, history) => {
    log.debug('selected film: %s', data.value);

    history.push(`/film/${data.value}`)
}

const MovieSelect = withRouter(React.memo(({history, ...props}) => {
    let films = props.films;

    let selected = parseInt(props.selected);

    log.debug('MovieSelect props %o, selected: %s', props, selected)

    let options = [];
    films.forEach(function(film) {
        options.push({
            key: film.episode_id,
            value: film.episode_id,
            text: film.title,
        })
    })

    return (
        <Select placeholder='Choose a movie' defaultValue={selected} options={options} onChange={(e, data)=> handleOnChange(e, data, history)}/>
    );
}));

export default MovieSelect;