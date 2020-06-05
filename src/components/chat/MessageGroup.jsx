import PropTypes       from 'prop-types'
import React           from 'react'
import styled, { css } from 'styled-components'

import Message from './Message'

const StyledMessageGroup = styled.div`
  max-width: 80%;
  box-sizing: border-box;
  
  display: flex;
  flex-shrink: 0;
  flex-flow: column nowrap;
  position: relative;
  align-items: flex-start;
  text-align: left;

  ${props => !!props.user && css`
    align-self: flex-end;
    text-align: right;
  `}
`

const MessageGroup = ({
  group,
  isLastGroup,
  selectedItemIndex,
  ...other
}) => {
  const is_user = group.messages[0].author.id === 1
  const lastItemIndex = group.messages.length - 1
  
  return (
    <StyledMessageGroup user={is_user}
                        aria-label="Message-Group">
      {group.messages.map((msg, index) =>
        [<Message item={msg}
                  selected={msg.selectionIndex === selectedItemIndex}
                  tabbable={index === lastItemIndex && isLastGroup}
                  isFirstMessage={index === 0}
                  isLastMessage={index === lastItemIndex}
                  isOnlyMessage={lastItemIndex === 0}
                  isUser={is_user}
                  {...other}
                  key={index}/>]
      )}
    </StyledMessageGroup>
  )
}

MessageGroup.propTypes = {
  group            : PropTypes.object.isRequired,
  selectedItemIndex: PropTypes.number
}

export default React.memo(MessageGroup)
