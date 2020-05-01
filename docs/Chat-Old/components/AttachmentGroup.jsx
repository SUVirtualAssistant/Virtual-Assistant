import React                        from 'react'
import Attachment                   from './Attachment'
import { classNames }               from '../utils'
import { SelectableItemsContainer } from './base/SelectableItemsContainer'

class AttachmentGroup extends SelectableItemsContainer {
  render() {
    const isCardDeckLayout = this.isCardDeckLayout(this.props)
    const viewWithoutScrollButtons = (
      <div className={ this.getClassNames() }
           onKeyDown={ isCardDeckLayout ? undefined : this.onKeyDown }>
        {
          this.props.group.attachments.map((item,index) =>
            <Attachment item={item}
                template={this.props.itemTemplate}
                selected={index === this.state.selectedItemIndex}
                tabbable={this.props.isLastGroup && index === this.state.selectedItemIndex}
                isFirstItemInGroup={index === 0}
                isLastItemInGroup={index === this.getLastSelectionIndex()}
                onClick={() => this.onAttachmentClick(index)}
                key={index} />
          )
        }
      </div>
    )
    
    if (isCardDeckLayout)
      return <div className='k-card-deck-scrollwrap' onKeyDown={this.onKeyDown}>
          {this.getLeftScrollBtn()}
          {viewWithoutScrollButtons}
          {this.getRightScrollBtn()}
        </div>
    else
      return viewWithoutScrollButtons
  }
  
  getLastItemIndex() {
    return this.props.group.attachments.length - 1
  }
  
  getLeftScrollBtn() {
    let result = null
    
    if (this.isCardDeckLayout(this.props) && this.state.selectedItemIndex)
      result = (
        <button className='k-button k-button-icon'
                onClick={() => this.onNavigationBtnClick(false)}>
          <span className='k-icon k-i-arrow-chevron-left' />
        </button>
      )
    
    return result
  }
  
  getRightScrollBtn() {
    let result = null
    
    if (this.isCardDeckLayout(this.props) && this.state.selectedItemIndex !== this.getLastItemIndex())
      result = (
        <button className='k-button k-button-icon'
                onClick={() => this.onNavigationBtnClick(true)}>
          <span className='k-icon k-i-arrow-chevron-right' />
        </button>
      )
    
    return result
  }
  
  onAttachmentClick(attachmentIndex) {
    this.onRequestContainerSelection()
    this.setState({ selectedItemIndex: attachmentIndex })
  }
  
  onNavigationBtnClick(incrementSelection) {
    this.onRequestContainerSelection()
    this.navigate(incrementSelection, 1)
  }
  
  isCardDeckLayout(props) {
    return props.group.attachmentLayout !== 'list'
  }
  
  getClassNames() {
    return classNames({ 'k-card-deck': this.isCardDeckLayout(this.props) })
  }
}

Object.defineProperty(AttachmentGroup.prototype, "isKeyboardNavigationLeftRight", {
  // Overriding the default navigation
  get: function () {
    return this.isCardDeckLayout(this.props)
  },
  enumerable: true,
  configurable: true
})

export default AttachmentGroup