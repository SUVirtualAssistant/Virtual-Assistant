import * as React    from 'react'
import { Keys }      from '../../utils'

class SelectableItemsContainer extends React.Component {
  state = {
    selectedItemIndex: null
  }
  
  isKeyboardNavigationLeftRight = true
  
  onRequestContainerSelection = () => this.props.onRequestSelection(this.props.group.selectionIndex)
  
  onKeyDown = event => {
    let newSelectedItemIndex = null
    let decrementKeyCode
    let incrementKeyCode
    
    if (this.isKeyboardNavigationLeftRight) {
      decrementKeyCode = Keys.left
      incrementKeyCode = Keys.right
    } else {
      decrementKeyCode = Keys.up
      incrementKeyCode = Keys.down
    }
    
    if (event.keyCode === decrementKeyCode)
      newSelectedItemIndex = this.navigate(false)
    else if (event.keyCode === incrementKeyCode)
      newSelectedItemIndex = this.navigate(true)
    
    if (newSelectedItemIndex !== null) {
      // Prevent the default behaviour of moving of the scrollbar
      // because scrolling is achieved through item focusing
      event.preventDefault()
      // Stop propagation to remove the collision with the up/down
      // keyboard navigation of the message list
      event.stopPropagation()
    }
  }
  
  getDerivedStateFromProps(props, state) {
    if (!props.selected && state.selectedItemIndex !== null)
      // Moving away from a selected group
      return { selectedItemIndex: null }
    else if (props.selected && state.selectedItemIndex === null)
      // Entering a group w/o directly choosing (e.g. clicking) a subitem.
      return { selectedItemIndex: 0 }
    
    return null
  }
  
  navigate(incrementSelection, newSelectedItemIndexUponFirstIncrement) {
    if (newSelectedItemIndexUponFirstIncrement === void 0)
      newSelectedItemIndexUponFirstIncrement = 0
    
    let result = null
    const currentlySelectedItemIndex = this.state.selectedItemIndex
    
    if (incrementSelection) {
      if (currentlySelectedItemIndex === null)
        result = newSelectedItemIndexUponFirstIncrement
      else if (currentlySelectedItemIndex < this.getLastSelectionIndex())
        result = currentlySelectedItemIndex + 1
    } else {
      if (currentlySelectedItemIndex === null)
        result = 0
      else if (currentlySelectedItemIndex > 0)
        result = currentlySelectedItemIndex - 1
    }
    
    if (result !== null)
      this.setState({ selectedItemIndex: result })
    
    return result
  }
  
  getLastSelectionIndex() {
    let result = -1
    if (this.props.group.type === 'action-group') {
      const actionGroup = this.props.group
      result = actionGroup.actions ? actionGroup.actions.length - 1 : -1
    } else if (this.props.group.type === 'attachment-group') {
      const attachmentGroup = this.props.group
      result = attachmentGroup.attachments ? attachmentGroup.attachments.length - 1 : -1
    }
    
    return result
  }
}

// Object.defineProperty(SelectableItemsContainer.prototype, "isKeyboardNavigationLeftRight", {
//   get: function () {
//     return true;
//   },
//   enumerable: true,
//   configurable: true
// })

export { SelectableItemsContainer }
