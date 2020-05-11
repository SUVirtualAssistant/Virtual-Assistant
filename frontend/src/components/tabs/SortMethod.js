import PropTypes       from 'prop-types'
import React, { memo } from 'react'

const SortMethod = memo(({ handleTabChange, handleTabSequence, activeIndex, children }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) {
      if (activeIndex !== oldIndex) {
        handleTabChange(oldIndex)
      }
    } else {
      handleTabSequence({ oldIndex, newIndex })
    }
  }
})

SortMethod.propTypes = {
  handleTabChange  : PropTypes.func,
  handleTabSequence: PropTypes.func,
  activeIndex      : PropTypes.number,
  children         : PropTypes.node
}

export { SortMethod as default }
