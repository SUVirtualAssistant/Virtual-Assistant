import PropTypes         from 'prop-types'
import React, { useRef } from 'react'
import styled, { css }   from 'styled-components'
import CloseButton       from './CloseButton'

const TabStyle = styled.li`
  display: ${props => props.vertical ? 'block' : 'inline-block'};

  ${props => props.vertical
             ? css`
      background-color: white;
      color: black;
      padding: 10px 10px;
      z-index: 1000;
    ` : props => props.closable
                 ? css` padding: 10px 10px 10px 15px; `
                 : css` padding: 10px 15px; `
};

  user-select: none;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

const TabText = styled.span`
  vertical-align: middle;
`

const Tab = ({ handleTabChange, handleEdit, index, active, closable, vertical, children }) => {
  let internalNode = useRef()

  const onClick = () => {
    handleTabChange(index)
  }

  const deleteTab = e => {
    e.stopPropagation()     // prevent trigger clickTab event
    handleEdit({ type: 'delete', index })
  }

  return (
    <TabStyle ref={node => internalNode = node}
                  onClick={onClick}
                  active={active}
                  vertical={vertical}
                  closable={closable}
                  role="tab"
                  aria-controls={index}
                  aria-selected={active}>
      <TabText>{children}</TabText>
      {closable
       ? <CloseButton handleDelete={deleteTab}/>
       : null}
    </TabStyle>

  )
}

Tab.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  handleEdit     : PropTypes.func.isRequired,
  index          : PropTypes.number.isRequired,
  active         : PropTypes.bool.isRequired,
  closable       : PropTypes.bool,
  vertical       : PropTypes.bool,
  children       : PropTypes.arrayOf(PropTypes.element)
}

Tab.displayName = 'Tab'

export { Tab as default, TabStyle }
