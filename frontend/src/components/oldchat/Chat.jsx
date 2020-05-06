import { classNames }                         from '@shared/utils/classNames'
import { KEYS }                               from '@shared/constants'
import { convertMsgsToViewItems }             from '@shared/utils/view-items'
import { any, arrayOf, func, object, string } from 'prop-types'
import * as React                             from 'react'
import ActionGroup                            from './ActionGroup'
import DateMarker                             from './DateMarker'
import dispatchEvent                          from './event/dispatchEvent'
import MessageGroup                           from './MessageGroup'
import NewMessage                             from './NewMessage'

class Chat extends React.Component {
  scrollToBottomOnLoadingData = true

  constructor(props) {
    super(props)

    this.state = {
      selectedItemIndex: null,
      isFirstRender    : true
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onSelectionRequested = this.onSelectionRequested.bind(this)
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
                                   : this.messages.lastSelectionIndex

    if (event.keyCode === KEYS.up) {
      if (currentSelectedItemIndex === null) {
        newSelectedItemIndex = 0
      } else if (currentSelectedItemIndex > 0) {
        newSelectedItemIndex = currentSelectedItemIndex - 1
      }
    } else if (event.keyCode === KEYS.down) {
      if (currentSelectedItemIndex === null) {
        newSelectedItemIndex = 0
      } else if (currentSelectedItemIndex < this.messages.lastSelectionIndex) {
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
    this.messages = this.getViewItemsFromMsgs(this.props.messages)

    return (
      <div className={this.getClassNames()}
           onKeyDown={this.onKeyDown}
      >
        <div className='k-message-list k-avatars'
             role='log'
             aria-live='polite'
             onBlur={this.onBlur}
             onFocus={this.onFocus}
             onScroll={e => this.scrollToBottomOnLoadingData =
               e.currentTarget.scrollTop === e.currentTarget.scrollHeight - e.currentTarget.clientHeight}
             ref={el => this.viewItemsWrapperEl = el}>
          <div className='k-message-list-content'>
            {this.renderMessageList()}
          </div>
        </div>
        <NewMessage onMessageSend={this.onMessageSend}
                    onToolbarActionButtonClick={this.props.onToolbarActionExecute}
                    placeholder={this.props.placeholder}
                    user={this.props.user}
                    toolbar={this.props.toolbar}
                    showToolbar={this.props.showToolbar}
                    MessageBox={this.props.messageBox}
                    ref={comp => this.newMsgComp = comp}/>
      </div>
    )
  }

  // todo: useEffect(() => { ... }, []) only runs on mount
  componentDidMount() {
    this.setState({ isFirstRender: false }, () => {
      this.nextTickId = setTimeout(() => this.scrollViewItemsToBottom(), 250)
    })
  }

  // todo: this is going to be a useEffect -> useEffect(() => { ... }, [messages]
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.messages.length !== this.props.messages.length && this.scrollToBottomOnLoadingData) {
      this.scrollViewItemsToBottom()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.nextTickId)
  }

  getClassNames() {
    return classNames('k-widget', 'k-chat', this.props.className)
  }

  selectLastViewItemWhenNoCurrentSelection() {
    if (this.state.selectedItemIndex === null) {
      this.setState({ selectedItemIndex: this.messages.lastSelectionIndex })
    }
  }

  renderMessageList() {
    const lastViewItemIndex = this.messages.length - 1
    return this.messages.map((viewItem, index) => {
        switch (viewItem.type) {
          case 'date-marker':
            return <DateMarker item={viewItem}
                               key={index}/>
          case 'message-group':
            return <MessageGroup group={viewItem}
                                 user={this.props.user}
                                 selectedItemIndex={this.state.selectedItemIndex}
                                 onRequestSelection={this.onSelectionRequested}
                                 isLastGroup={index === lastViewItemIndex}
                                 key={index}/>
          case 'action-group':
            return <ActionGroup group={viewItem}
                                onActionExecute={this.onActionExecute}
                                onRequestSelection={this.onSelectionRequested}
                                selected={viewItem.selectionIndex === this.state.selectedItemIndex}
                                isLastGroup={index === lastViewItemIndex}
                                key={index}/>
          default:
            break
        }
      }
    )
  }

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
