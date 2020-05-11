import { isAuthor as isUser } from '@shared/utils'
import PropTypes              from 'prop-types'
import React                  from 'react'
import styled, { css }        from 'styled-components'
import Message                from './Message'

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

  ${props => props.user && css`
    align-self: flex-end;
    align-items: flex-end;
    text-align: right;
  `}
`

const MessageGroup = props => {
  const {
    group,
    user,
    isLastGroup,
    selectedItemIndex,
    ...other
  } = props

  const lastItemIndex = group.messages.length - 1
  const is_user = isUser(user, group.messages[0])

  return (
    <StyledMessageGroup user={is_user}>
      {group.messages.map((msg, index) =>
        [<Message item={msg}
                  user={is_user}
                  selected={msg.selectionIndex === selectedItemIndex.current}
                  tabbable={index === lastItemIndex && isLastGroup}
                  key={index}
                  {...other}/>]
      )}
    </StyledMessageGroup>
  )
}

MessageGroup.propTypes = {
  group             : PropTypes.object.isRequired,
  user              : PropTypes.object.isRequired,
  isLastGroup       : PropTypes.bool.isRequired,
  onRequestSelection: PropTypes.func.isRequired,
  selectedItemIndex : PropTypes.object.isRequired
}

export default React.memo(MessageGroup)
