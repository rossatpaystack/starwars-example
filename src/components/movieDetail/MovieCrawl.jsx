import React from 'react'
import log from 'loglevel';
import styled from 'styled-components';

const MovieCrawl = (props) => {
    let film = props.film;

    //todo: https://codepen.io/geoffgraham/pen/BpwqOE

    const Crawl = styled.section`
    padding-top:15px;
    max-width:400px;

    -webkit-animation: moving 5s forwards;
    animation: moving 5s forwards;

    @-webkit-keyframes moving {
        from {-webkit-transform: translateY(0px);}
        to {-webkit-transform: translateY(-15px);}
    }
    
    @keyframes moving {
        from {transform: translateY(0px);}
        to {transform: translateY(-15px);}
    }
    `;

    return (
        <div>
            <Crawl>
                {film.opening_crawl}
            </Crawl>


        </div>
    );
};

export default MovieCrawl;