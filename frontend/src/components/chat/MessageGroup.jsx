import { isAuthor as isUser } from '@shared/utils'
import PropTypes              from 'prop-types'
import React                  from 'react'
import styled, { css }        from 'styled-components'
import Message                               from './Message'

const StyledMessageGroup = styled.div`
  max-width: 80%;
  background: none;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  position: relative;

  align-items: flex-start;
  text-align: left;

  time {
    margin-left: ${({ theme }) => theme.chat.item_spacing_x};
    left: 100%;
  }

  ${props => props.user && css`
    align-self: flex-end;
    align-items: flex-end;
    text-align: right;

    time {
      margin-right: ${({ theme }) => theme.chat.item_spacing_x};
      right: 100%;
    }
  `}
`

const MessageGroup = ({ group, user, selectedItemIndex, onRequestSelection, isLastGroup }) => {

  const getGroupMessagesView = (group, selectedItemIndex, onRequestSelection, isLastGroup) => {
    const lastItemIndex = group.messages.length - 1
    return group.messages.map((msg, index) =>
      [<Message item={msg} user={isUser(user, group.messages[0])}
                selected={msg.selectionIndex === selectedItemIndex}
                onRequestSelection={onRequestSelection}
                tabbable={index === lastItemIndex && isLastGroup}
                isFirstItemInGroup={index === 0}
                isLastItemInGroup={index === lastItemIndex}
                isOnlyItemInGroup={lastItemIndex === 0}
                key={index}/>]
    )
  }

  return (
    <StyledMessageGroup user={isUser(user, group.messages[0])}>
      {getGroupMessagesView(group, selectedItemIndex, onRequestSelection, isLastGroup)}
    </StyledMessageGroup>
  )
}

MessageGroup.propTypes = {
  group             : PropTypes.object.isRequired,
  isLastGroup       : PropTypes.bool.isRequired,
  onRequestSelection: PropTypes.func.isRequired,
  user              : PropTypes.object.isRequired,
  selectedItemIndex : PropTypes.number
}

export default MessageGroup
