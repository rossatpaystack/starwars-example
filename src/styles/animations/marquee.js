import {css} from 'styled-components'
const marquee = css`
    animation: marquee 3s linear infinite;

    @keyframes marquee {
        0% { left: 0; }
        100% { left: -100%; }
      }
`

export default marquee;