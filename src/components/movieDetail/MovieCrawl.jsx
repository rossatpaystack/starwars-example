import React from 'react'
import styled from 'styled-components';

import marquee from 'styles/animations/marquee';

const MovieCrawl = (props) => {
    let film = props.film;

    //todo: better animation, e.g. https://codepen.io/geoffgraham/pen/BpwqOE

    const Crawl = styled.section`
        display: block;
        width: 200%;
        height: 200px;

        font-family: monospace; /* Web-safe typewriter-like font */
        border-right: .15em solid orange; /* The typwriter cursor */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(30, end),
            blinking-cursor .5s step-end infinite;

          /* The typing effect */
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          
          /* The typewriter cursor effect */
          @keyframes blinking-cursor {
            from, to { border-color: transparent }
            50% { border-color: orange; }
          }
    `;

    let Container = styled.section`
        height: 200px;
        width: 420px;
    
        overflow: hidden;
        position: relative;
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