import { css, keyframes } from 'styled-components'

export const animate = keyframes`
  0% {
    transform: translateX(-5%);
  }
  
  100% {
    transform: translateX(100%);
  }
`

export const STYLES_DEFAULT = css`
  display: flex;
  flex: 1 500px;
`
