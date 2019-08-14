import React from 'react'
import styled from 'styled-components';

import marquee from 'styles/animations/marquee';

const MovieCrawl = (props) => {
    let film = props.film;

    //todo: better animation, e.g. https://codepen.io/geoffgraham/pen/BpwqOE

    const Crawl = styled.section`
        display: inline-block;
        padding-left: 100%;
        /* show the marquee just outside the paragraph */
        animation: marquee 50s linear infinite;

        ${marquee}
    `;

    let Container = styled.section`
        width: 450px;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        box-sizing: border-box;
    `;

    return (
        <Container>
            <Crawl>
                {film.opening_crawl}
            </Crawl>
        </Container>

        
    );
};

export default MovieCrawl;