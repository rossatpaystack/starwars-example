import {css} from 'styled-components'
const grow = css`
    animation: grow 2s;

    @keyframes grow {
        from {
        transform: scale(0);
        }
        to {
        transform: scale(1);
        }
    }
`

export default grow;