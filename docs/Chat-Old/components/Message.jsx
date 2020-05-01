import { classNames }             from '../utils'
import { FocusableUponSelection } from './base/FocusableUponSelection'
import React                      from 'react'

class Message extends FocusableUponSelection {
  render() {
    return <div className={this.getClassNames()}
                tabIndex={this.props.tabbable ? 0 : -1}
                onClick={() => this.props.onRequestSelection(this.props.items.selectionIndex)}
                onFocus={() => this.props.onRequestSelection(this.props.item.selectionIndex)}
                ref={el => this.elementToFocus = el}>
      { this.getTimestampView() }
      { this.getMainView()      }
      { this.getStatusView()    }
    </div>
  }
  
  getMainView() {
    if (this.props.item.typing)
      return <div className='k-bubble'>
        <div className='k-typing-indicator'>
          <span />
          <span />
          <span />
        </div>
      </div>
    else if (this.props.template)
      return React.createElement(this.props.template, { item: this.props.item })
    else if (this.props.item.text)
      return <div className='k-bubble'>{ this.props.item.text }</div>
    else
      return null
  }
  
  getTimestampView() {
    let result = null
    if (this.props.item.timestamp)
      result = <time className='k-message-time' aria-hidden={!this.props.selected}>{ this.props.item.timestamp }</time>
    return result
  }
  
  getStatusView() {
    let result = null
    if (this.props.item.status)
      result = <span className='k-message-status'>{ this.props.item.status }</span>
    return result
  }
  
  getClassNames() {
    return classNames(
      { 'k-only': this.props.isOnlyItemInGroup },
      { 'k-first': this.props.isFirstItemInGroup && !this.props.isOnlyItemInGroup },
      { 'k-last': this.props.isLastItemInGroup && !this.props.isOnlyItemInGroup },
      { 'k-state-selected': this.props.selected },
      { 'k-state-focused': this.props.selected },
      'k-message')
  }
}

export default Message

