import { classNames }                                            from '@shared/utils/classNames'
import { KEYS }                                                  from '@shared/utils/constants'
import { convertMsgsToViewItems }                                from '@shared/utils/view-items'
import { any, arrayOf, func, number, object, oneOfType, string } from 'prop-types'
import * as React                                                from 'react'
import ActionGroup                                               from './ActionGroup'
import DateMarker                                                from './DateMarker'
import dispatchEvent                                             from './event/dispatchEvent'
import MessageGroup                                              from './MessageGroup'
import NewMessage                                                from './NewMessage'

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedItemIndex: null,
      isFirstRender    : true
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onSelectionRequested = this.onSelectionRequested.bind(this)

    this.scrollToBottomOnLoadingData = true
  }

  onFocus = () => {
    clearTimeout(this.timeoutIdForChatLosingFocus)
    this.selectLastViewItemWhenNoCurrentSelection()
  }

  onBlur = () => {
    this.timeoutIdForChatLosingFocus = setTimeout(
      () =>
        this.setState({ selectedItemIndex: null }),
      0)
  }

  onSelectionRequested(clickedItemIndex) {
    this.setState({ selectedItemIndex: clickedItemIndex })
  }

  onKeyDown = event => {
    let newSelectedItemIndex = null
    let currentSelectedItemIndex = this.state.selectedItemIndex !== null
                                   ? this.state.selectedItemIndex
                                   : this.viewItems.lastSelectionIndex

    if (event.keyCode === KEYS.up) {
      if (currentSelectedItemIndex === null) {
        newSelectedItemIndex = 0
      } else if (currentSelectedItemIndex > 0) {
        newSelectedItemIndex = currentSelectedItemIndex - 1
      }
    } else if (event.keyCode === KEYS.down) {
      if (currentSelectedItemIndex === null) {
        newSelectedItemIndex = 0
      } else if (currentSelectedItemIndex < this.viewItems.lastSelectionIndex) {
        newSelectedItemIndex = currentSelectedItemIndex + 1
      }
    }

    if (newSelectedItemIndex !== null) {
      this.setState({ selectedItemIndex: newSelectedItemIndex })
      // Prevent the default behavior moving of the scrollbar
      // because scrolling is achieved through item focusing.
      event.preventDefault()
    }
  }

  onMessageSend = (message, event) => {
    dispatchEvent(this.props.onMessageSend, event, this, { message: message })
  }

  onActionExecute = (action, event) => {
    dispatchEvent(this.props.onActionExecute, event, this, { action: action })
    if (!event.isDefaultPrevented()) {
      switch (action.type) {
        case 'reply':
          this.onMessageSend({
            author   : this.props.user,
            text     : action.value,
            timestamp: new Date()
          }, event)
          break
        case 'call':
          window.open('tel: ' + action.value)
          break
        case 'openUrl':
          window.open(action.value)
          break
        default:
          break
      }
      this.newMsgComp.focusInput()
    }
  }

  render() {
    this.viewItems = this.getViewItemsFromMsgs(this.props.messages)
    this.isDirectionRightToLeft = this.checkIsDirectionRightToLeft(this.props)

    return (
      React.createElement('div', {
          style    : { width: this.props.width },
          onKeyDown: this.onKeyDown,
          className: this.getClassNames(),
          ref      : (el) => this.chatWrapperEl = el
        },
        React.createElement('div', {
            className  : 'k-message-list k-avatars',
            onBlur     : this.onBlur,
            onFocus    : this.onFocus,
            role       : 'log',
            'aria-live': 'polite',
            onScroll   : (e) => {
              this.scrollToBottomOnLoadingData =
                (e.currentTarget.scrollTop === e.currentTarget.scrollHeight - e.currentTarget.clientHeight)
            },
            ref        : (el) => this.viewItemsWrapperEl = el
          },
          React.createElement('div', { className: 'k-message-list-content' }, this.renderViewItems())),
        React.createElement(NewMessage, {
          user                      : this.props.user,
          onMessageSend             : this.onMessageSend,
          isDirectionRightToLeft    : this.isDirectionRightToLeft,
          ref                       : (comp) => this.newMsgComp = comp,
          placeholder               : this.props.placeholder,
          MessageBox                : this.props.messageBox,
          toolbar                   : this.props.toolbar,
          onToolbarActionButtonClick: this.props.onToolbarActionExecute,
          showToolbar               : this.props.showToolbar
        })))
  }

  componentDidMount() {
    this.setState({ isFirstRender: false }, () => {
      this.nextTickId = setTimeout(() => this.scrollViewItemsToBottom(), 250)
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.messages.length !== this.props.messages.length && this.scrollToBottomOnLoadingData) {
      this.scrollViewItemsToBottom()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.nextTickId)
  }

  getClassNames() {
    return classNames('k-widget', 'k-chat', this.props.className, { 'k-rtl': this.isDirectionRightToLeft })
  }

  checkIsDirectionRightToLeft(props) {
    const result = props.dir !== undefined ? props.dir === 'rtl' : this.chatWrapperEl && getComputedStyle(this.chatWrapperEl).direction === 'rtl'
    return Boolean(result)
  }

  selectLastViewItemWhenNoCurrentSelection() {
    if (this.state.selectedItemIndex === null) {
      this.setState({ selectedItemIndex: this.viewItems.lastSelectionIndex })
    }
  }

  renderViewItems() {
    const lastViewItemIndex = this.viewItems.length - 1
    return this.viewItems
               .map((viewItem, index) => {
                 if (viewItem.type === 'date-marker') {
                   return <DateMarker item={viewItem} key={index}/>
                 } else if (viewItem.type === 'message-group') {
                   return (React.createElement(MessageGroup, {
                     group             : viewItem,
                     itemTemplate      : this.props.messageTemplate,
                     attachmentTemplate: this.props.attachmentTemplate,
                     user              : this.props.user,
                     selectedItemIndex : this.state.selectedItemIndex,
                     onRequestSelection: this.onSelectionRequested,
                     isLastGroup       : index === lastViewItemIndex,
                     key               : index
                   }))
                 } else if (viewItem.type === 'action-group') {
                   return (React.createElement(ActionGroup, {
                     group             : viewItem,
                     onActionExecute   : this.onActionExecute,
                     onRequestSelection: this.onSelectionRequested,
                     selected          : viewItem.selectionIndex === this.state.selectedItemIndex,
                     isLastGroup       : index === lastViewItemIndex,
                     key               : index
                   }))
                 }
               })
  };

  scrollViewItemsToBottom() {
    if (this.viewItemsWrapperEl) {
      this.viewItemsWrapperEl.scrollTop = this.viewItemsWrapperEl.scrollHeight - this.viewItemsWrapperEl.clientHeight
    }
  }

  getViewItemsFromMsgs(msgs) {
    return msgs.length > 0 ? convertMsgsToViewItems(msgs) : []
  }

}

Chat.propTypes = {
  messages              : arrayOf(object),
  user                  : object,
  messageTemplate       : any,
  attachmentTemplate    : any,
  width                 : oneOfType([string, number]),
  onMessageSend         : func,
  onActionExecute       : func,
  onToolbarActionExecute: func,
  dir                   : string,
  messageBox            : any
}

Chat.defaultProps = {
  messages: []
}

export { Chat }
