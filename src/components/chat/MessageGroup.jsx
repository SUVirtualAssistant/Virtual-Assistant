import PropTypes       from 'prop-types'
import React           from 'react'
import styled, { css } from 'styled-components'

import Message from './Message'

const StyledMessageGroup = styled.div`
  position: relative;
  max-width: 80%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  align-items: flex-start;
  text-align: left;

  ${props => !!props.user && css`
    align-self: flex-end;
    align-items: flex-end;
    text-align: right;
  `}
`

/**
 *
 * @param group
 * @param user
 * @param selectedItemIndex
 * @param other
 * @returns {*}
 * @constructor
 */
const MessageGroup = ({
  group,
  selectedItemIndex,
  ...other
}) => {
  const is_user = group.messages[0].author.id === 1
  
  return (
    <StyledMessageGroup user={is_user}>
      {group.messages.map((msg, index) =>
        [<Message item={msg}
                  isUser={is_user}
                  selected={msg.selectionIndex === selectedItemIndex}
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
