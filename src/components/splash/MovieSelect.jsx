import React from 'react'
import { Select } from 'semantic-ui-react'
import log from 'loglevel';

import { withRouter } from "react-router";

const handleOnChange = (e, data, history) => {
    log.debug('selected film: %s', data.value);

    history.push(`/film/${data.value}`)
}

const MovieSelect = React.memo(withRouter(({history, ...props}) => {
    let films = props.films;

    let options = [];
    films.forEach(function(film) {
        options.push({
            key: film.episode_id,
            value: film.episode_id,
            text: film.title,
        })
    })

    return (
        <Select placeholder='Choose a movie' options={options} onChange={(e, data)=> handleOnChange(e, data, history)}/>
    );
}));

export default withRouter(MovieSelect);