import React  from 'react'
import styled from 'styled-components'

const CloseWrapper = styled.button`
  display: inline-block;
  color: #777;
  margin-left: 5px;
  vertical-align: middle;
  border: 0;
  padding: 2px;
  outline: 0;

  &:hover {
    color: black;
    background: #eee;
    cursor: pointer;
    border-radius: 50%;
  }

  > svg {
    vertical-align: middle;
  }
`

const CloseIcon = () => (
  <svg viewBox="0 0 40 40" fill="currentColor" height="1em" width="1em" style={{verticalAlign: 'middle'}}>
    <g>
      <path d="m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z"/>
    </g>
  </svg>
)

const CloseButton = React.memo(({ handleDelete }) => (
  <CloseWrapper onClick={handleDelete}>
    <CloseIcon />
  </CloseWrapper>
))

export default CloseButton
