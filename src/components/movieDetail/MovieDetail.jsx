import React from 'react'
import {withRouter} from 'react-router';
import log from 'loglevel';

const handleOnChange = (e, data) => {
    log.debug('selected film: %s', data.value);

    // <Redirect to="/dashboard" />
}

const MovieDetail = (props) => {
    // let films = props.films;

    log.debug('moviedetail: %o ', props)

    const { match: { params } } = props

    log.debug('params: %o', params)

    return (
        <div>
            Movies are great
        </div>
    );
};

export default MovieDetail;