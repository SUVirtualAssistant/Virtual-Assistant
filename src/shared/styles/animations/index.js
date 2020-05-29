import { keyframes } from 'styled-components'

const loading = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`

const scale = keyframes`
  100% { transform: scale(1); }
`

export {
  loading,
  scale
}

