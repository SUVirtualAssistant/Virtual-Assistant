import React    from 'react'
import { KEYS } from '@shared/utils/constants'

class SelectableItemsContainer extends React.Component {
  isKeyboardNavigationLeftRight = true

  constructor(props) {
    super(props)
    this.state = {
      selectedItemIndex: null
    }

    this.onRequestContainerSelection = this.onRequestContainerSelection.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onRequestContainerSelection = () => {
    return this.props.onRequestSelection(this.props.group.selectionIndex)
  }

  onKeyDown(event) {
    let newSelectedItemIndex = null, decrementKeyCode, incrementKeyCode

    if (this.isKeyboardNavigationLeftRight) {
      decrementKeyCode = KEYS.left
      incrementKeyCode = KEYS.right
    } else {
      decrementKeyCode = KEYS.up
      incrementKeyCode = KEYS.down
    }

    if (event.keyCode === decrementKeyCode) {
      newSelectedItemIndex = this.navigate(false)
    } else if (event.keyCode === incrementKeyCode) {
      newSelectedItemIndex = this.navigate(true)
    }

    if (newSelectedItemIndex !== null) {
      // Prevent the default behavior of the scrollbar
      // because scrolling is achieved through item focusing
      event.preventDefault()
      // Stop propagation to remove the collision with the up/down
      // keyboard navigation of the message list
      event.stopPropagation()
    }
  }


  navigate(incrementSelection, newSelectedItemIndexUponFirstIncrement) {
    if (newSelectedItemIndexUponFirstIncrement === void 0) {
      newSelectedItemIndexUponFirstIncrement = 0
    }

    let result = null
    const currentlySelectedItemIndex = this.state.selectedItemIndex

    if (incrementSelection) {
      if (currentlySelectedItemIndex === null) {
        result = newSelectedItemIndexUponFirstIncrement
      } else if (currentlySelectedItemIndex < this.getLastSelectionIndex()) {
        result = currentlySelectedItemIndex + 1
      }
    } else {
      if (currentlySelectedItemIndex === null) {
        result = 0
      } else if (currentlySelectedItemIndex > 0) {
        result = currentlySelectedItemIndex - 1
      }
    }

    if (result !== null)
      this.setState({ selectedItemIndex: result })

    return result
  }

  getLastSelectionIndex() {
    let result = -1
    if (this.props.group.type === 'action-group') {
      const actionGroup = this.props.group
      result = actionGroup.actions ? actionGroup.actions.length - 1 : 1
    }
    return result
  }
}

SelectableItemsContainer.getDerivedStateFromProps = (props, state) => {
  if (!props.selected && state.selectedItemIndex !== null) {
    // Moving away from a selected group
    return { selectedItemIndex: null }
  } else if (props.selected && state.selectedItemIndex === null) {
    // entering a group w/o directly choosing (e.g. clicking) a sub-item.
    return { selectedItemIndex: 0 }
  }
  return null
}


export { SelectableItemsContainer }


