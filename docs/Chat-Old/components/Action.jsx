// let __extends = (this && this.__extends) || (function () {
//   let extendStatics = function (d, b) {
//       extendStatics = Object.setPrototypeOf ||
//         ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//         function (d, b) { for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p] }
//         return extendStatics(d, b)
//   }
//   return function (d, b) {
//     extendStatics(d, b)
//     function __() { this.constructor = d; }
//     d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
//   }
// })()

import React                      from 'react'
import { Keys, classNames }       from '../utils'
import { FocusableUponSelection } from './base/FocusableUponSelection'

class Action extends FocusableUponSelection {
  constructor(props) {
    super(props)
  }

  onKeyDown = event => {
    if (event.keyCode === Keys.enter)
      this.props.onActionExecute(this.props.item, event)
  }

  render() {
    return (
      <span className={this.getClassNames()}
            onClick={event => this.props.onActionExecute(this.props.item, event)}
            ref={el => this.elementToFocus = el}
            onKeyDown={this.onKeyDown}
            tabIndex={this.props.tabbable ? 0 : -1}>
        {this.props.item.title || this.props.item.value}
      </span>
    )
  }

  getClassNames() {
    return classNames('k-quick-reply', { 'k-first': this.props.isFirstItemInGroup }, { 'k-last': this.props.isLastItemInGroup }, { 'k-state-selected': this.props.selected }, { 'k-state-focused': this.props.selected })
  }
}

export default Action
