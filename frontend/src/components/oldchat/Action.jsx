import { classNames }          from '@shared/utils/classNames'
import { KEYS }                from '@shared/constants'
import React                   from 'react'
import { FocusableUponSelect } from './base/FocusableUponSelect'

class Action extends FocusableUponSelect {
  constructor(props) {
    super(props)
  }

  onKeyDown = event => {
    if (event.keyCode === KEYS.enter) {
      this.props.onActionExecute(this.props.item, event)
    }
  }

  render() {
    return (
      <span
        className={this.getClassNames()}
        onClick={event => this.props.onActionExecute(this.props.item, event)}
        ref={el => this.elementToFocus = el}
        onKeyDown={this.onKeyDown}
        tabIndex={this.props.tabbable ? 0 : -1}
      >
        {this.props.item.title || this.props.item.value}
      </span>
    )
  }

  getClassNames() {
    return classNames('k-quick-reply', { 'k-first': this.props.isFirstItemInGroup }, { 'k-last': this.props.isLastItemInGroup }, { 'k-state-selected': this.props.selected }, {'k-state-focused': this.props.selected })
  }
}

export default Action
