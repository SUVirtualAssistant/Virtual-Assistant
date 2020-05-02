import { classNames }          from '@shared/utils/classNames'
import { getMessageTime }      from '@shared/utils/date-time'
import React                   from 'react'
import { FocusableUponSelect } from './base/FocusableUponSelect'

class Message extends FocusableUponSelect {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      React.createElement("div",
        {
          className: this.getClassNames(),
          tabIndex: this.props.tabbable ? 0 : -1,
          onClick: () => {
            return this.props.onRequestSelection(this.props.item.selectionIndex);
          },
          onFocus: () => {
            return this.props.onRequestSelection(this.props.item.selectionIndex);
          },
          ref: (el) => {
            return this.elementToFocus = el;
          }
        },
        this.getTimestampView(),
        this.getMainView(),
        this.getStatusView()));
  };

  getMainView() {
    if (this.props.item.typing) {
      return (
        <div className="k-bubble">
          <div className='k-typing-indicator'>
            <span/>
            <span/>
            <span/>
          </div>
        </div>
      )
    } else if (this.props.item.text) {
      return <div className="k-bubble">{this.props.item.text}</div>
    } else {
      return null
    }
  }

  getTimestampView() {
    let result = null
    if (this.props.item.timestamp)
      result = <time className='k-message-time' aria-hidden={!this.props.selected}>{getMessageTime()}</time>

    return result
  }

  getStatusView() {
    let result = null
    if (this.props.item.status)
      result = <span className="k-message-status">{this.props.item.status}</span>

    return result
  }

  getClassNames() {
    return classNames({ 'k-only': this.props.isOnlyItemInGroup }, { 'k-first': this.props.isFirstItemInGroup && !this.props.isOnlyItemInGroup }, { 'k-last': this.props.isLastItemInGroup && !this.props.isOnlyItemInGroup }, { 'k-state-selected': this.props.selected }, { 'k-state-focused': this.props.selected }, 'k-message')
  }
}

export default Message
