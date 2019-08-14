import {css} from 'styled-components'
const marquee = css`
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`

export default marquee;