import React      from 'react'
import styled     from 'styled-components'
import characters from './characters'

import Item                   from './Item'
import { useFocus } from '@shared/hooks'

const ListContainer = styled.div`
  border-color: rgba(0,0,0.12);
  color: rgba(0,0,0.87);
  background-color: #fafafa;

  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  outline: 0;
  font-size: 14px;
  line-height: 2;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;

  flex: 1 1 auto;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const ListContent = styled.div`
  padding: 16px 16px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

const List = () => {
  const [focus, setFocus] = useFocus(characters.length)

  return (
    <ListContainer>
      <ListContent>
        {characters.map((character, index) => (
          <Item
            key={character}
            setFocus={setFocus}
            index={index}
            focus={focus === index}
            character={character}
          />
        ))}
      </ListContent>
    </ListContainer>
  )
}

export default List
