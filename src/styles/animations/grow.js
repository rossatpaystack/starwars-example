import {css} from 'styled-components'
const grow = css`
    animation: grow 3s;

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