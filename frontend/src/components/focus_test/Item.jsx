import React, { useEffect, useRef, useCallback } from 'react'
import styled                                    from 'styled-components'

const ListItem = styled.div`
  align-self: flex-start;
  text-align: left;
  max-width: 80%;
  background: none;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  position: relative;
`

const ListItemContent = styled.div`
  max-width: 100%;
  margin: 2px 0 0;
  position: relative;
  transition: margin .2s ease-in-out;
  outline: none;
`

const Time = styled.time`
  margin-left: 8px;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity .2s ease-in-out;

  font-size: smaller;
  line-height: normal;
  white-space: nowrap;
  pointer-events: none;
  position: absolute;
  opacity: ${props => props.show ? 1 : 0};
`

const Item =({ character, focus, index, setFocus }) => {
  const ref = useRef(null)

  useEffect(() => {
    // Move element into view when it is focused
    if (focus) ref.current.focus()
  }, [focus])

  const handleSelect = useCallback(() => {
    // setting focus to that element when it is selected
    setFocus(index)
  }, [character, index, setFocus])


  return (
    <>
      <ListItem
        tabIndex={focus ? 0 : -1}
        role="button"
        ref={ref}
        onClick={handleSelect}
        onKeyPress={handleSelect}>
        <ListItemContent>
          {character}
          <Time aria-hidden={focus ? 'false' : 'true'} show={!!focus}>{new Date().toLocaleString()}</Time>
        </ListItemContent>
      </ListItem>
    </>
  )
}

export default Item
