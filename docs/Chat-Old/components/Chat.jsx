/**
 * Chatbot is a container for MessageGroup, input, send button, etc
 *
 */
// import { lexActions }                      from '@state/chat/actions'
// import { useDispatch }                     from 'react-redux'

import * as PropTypes from 'prop-types'
import * as React     from 'react'

import { classNames, Keys }       from '../utils'
import dispatchEvent              from '../utils/dispatchEvent'
import { convertMsgsToViewItems } from '../utils/ViewItem'
import ActionGroup                         from './ActionGroup'
import AttachmentGroup                     from './AttachmentGroup'
import DateMarker                          from './DateMarker'
import MessageGroup                        from './MessageGroup'
import NewMessage                          from './NewMessage'

class Chat extends React.Component {
  static propTypes = {
    messages          : PropTypes.arrayOf(PropTypes.object),
    user              : PropTypes.object,
    messageTemplate   : PropTypes.any,
    attachmentTemplate: PropTypes.any,
    width             : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onMessageSend     : PropTypes.func,
    onActionExecute   : PropTypes.func,
    dir               : PropTypes.string,
    messageBox        : PropTypes.any
  }
  
  static defaultProps = {
    messages: []
  }
  
  state = {
    selectedItemIndex: null,
    isFirstRender: true
  }
  
  scrollToBottomOnLoadingData = true
  
  componentDidMount () {
    this.setState({ isFirstRender: false }, () => {
      // W/o setTimeout the scrolling does not manage to go to the bottom, some offset is left.
      this.nextTickId = setTimeout(() => { this.scrollViewItemsToBottom() }, 250)
    })
  }
  
  componentWillUnmount () {
    clearTimeout(this.nextTickId)
  }
  
  componentDidUpdate (prevProps) {
    if (prevProps.messages.length !== this.props.messages.length && this.scrollToBottomOnLoadingData)
      this.scrollViewItemsToBottom()
  }
  
  onFocus = () => {
    clearTimeout(this.timeoutIdForChatLosingFocus)
    this.selectLastViewItemWhenNoCurrentSelection()
  }
  
  onBlur = () => {
    // This is a hacky solution to clear the selection when the focus is lost
    // in favor of an element outside the Chat
    this.timeoutIdForChatLosingFocus = setTimeout(() => {
      this.setState({ selectedItemIndex: null })
    }, 0)
  }
  
  onSelectionRequested = clickedItemIndex => {
    this.setState({ selectedItemIndex: clickedItemIndex })
  }
  
  onKeyDown = event => {
    let newSelectedItemIndex = null
    const currentSelectedItemIndex = this.state.selectedItemIndex !== null
                                     ? this.state.selectedItemIndex
                                     : this.viewItems.lastSelectionIndex
    
    if (event.keyCode === Keys.up) {
      if (currentSelectedItemIndex === null) {
        newSelectedItemIndex = 0
      } else if (currentSelectedItemIndex > 0) {
        newSelectedItemIndex = currentSelectedItemIndex - 1
      }
    } else if (event.keyCode === Keys.down) {
      if (currentSelectedItemIndex == null) {
        newSelectedItemIndex = 0
      } else if (currentSelectedItemIndex < this.viewItems.lastSelectionIndex) {
        newSelectedItemIndex = currentSelectedItemIndex + 1
      }
    }
    
    if (newSelectedItemIndex !== null) {
      this.setState({ selectedItemIndex: newSelectedItemIndex })
      // prevent the default behavior of moving of the scrollbar
      // because scrolling is achieved through item focusing
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
          window.open('tel:' + action.value)
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
  
  render () {
    this.viewItems = this.getViewItemsFromMsgs(this.props.messages)
    this.isDirectionRightToLeft = this.checkIsDirectionRightToLeft(this.props)
    
    return (
      <div className={this.getClassNames()}
           onKeyDown={this.onKeyDown}
           ref={el => this.chatWrapperEl = el}>
        <div className="k-message-list"
             onBlur={this.onBlur}
             onFocus={this.onFocus}
             onScroll={e => this.scrollToBottomOnLoadingData = (e.currentTarget.scrollTop === e.currentTarget.scrollHeight - e.currentTarget.clientHeight)}
             ref={el => this.viewItemsWrapperEl = el}>
          <div className="k-message-list-content">
            {this.renderViewItems()}
          </div>
        </div>
        <NewMessage user={this.props.user}
                    onMessageSend={this.onMessageSend}
                    isDirectionRightToLeft={this.isDirectionRightToLeft}
                    ref={comp => this.newMsgComp = comp}
                    placeholder={this.props.placeholder}
                    toolbar={this.props.toolbar}
                    onToolbarActionButtonClick={this.props.onToolbarActionExecute}
                    showToolbar={this.props.showToolbar}/>
      </div>
    )
  }
  
  getClassNames () {
    return classNames('k-widget', 'k-chat', this.props.className, { 'k-rtl': this.isDirectionRightToLeft })
  }
  
  checkIsDirectionRightToLeft (props) {
    const result = props.dir !== undefined
                   ? props.dir === 'rtl'
                   : this.chatWrapperEl && getComputedStyle(this.chatWrapperEl).direction === 'rtl'
    return Boolean(result)
  }
  
  selectLastViewItemWhenNoCurrentSelection () {
    if (this.state.selectedItemIndex === null)
      this.setState({ selectedItemIndex: this.viewItems.lastSelectionIndex })
  }
  
  renderViewItems () {
    const lastViewItemIndex = this.viewItems.length - 1
    
    return this.viewItems.map((viewItem, index) => {
      if (viewItem.type === 'date-marker') {
        return <DateMarker item={viewItem} key={index}/>
      } else if (viewItem.type === 'message-group') {
        return <MessageGroup group={viewItem} itemTemplate={this.props.messageTemplate}
                             attachmentTemplate={this.props.attachmentTemplate} user={this.props.user}
                             selectedItemIndex={this.state.selectedItemIndex}
                             onRequestSelection={this.onSelectionRequested}
                             isLastGroup={index === lastViewItemIndex} key={index}/>
      } else if (viewItem.type === 'attachment-group') {
        return <AttachmentGroup group={viewItem}
                                itemTemplate={this.props.attachmentTemplate}
                                onRequestSelection={this.onSelectionRequested}
                                selected={viewItem.selectionIndex === this.state.selectedItemIndex}
                                isLastGroup={index === lastViewItemIndex}
                                key={index}/>
      } else if (viewItem.type === 'action-group') {
        return <ActionGroup group={viewItem}
                            onActionExecute={this.onActionExecute}
                            onRequestSelection={this.onSelectionRequested}
                            selected={viewItem.selectionIndex === this.state.selectedItemIndex}
                            isLastGroup={index === lastViewItemIndex}
                            key={index}/>
      }
    })
  }
  
  scrollViewItemsToBottom() {
    if (this.viewItemsWrapperEl)
      this.viewItemsWrapperEl.scrollTop = this.viewItemsWrapperEl.scrollHeight - this.viewItemsWrapperEl.clientHeight
  }
  
  getViewItemsFromMsgs(msgs) {
    return msgs.length > 0 ? convertMsgsToViewItems(msgs) : []
  }
}

export { Chat }

// const startParams = {
//   botAlias    : '$LATEST',
//   botName     : 'Mercury',
//   userId      : 'CONNOR',
//   accept      : 'text/plain; charset=utf-8',
//   dialogAction: {
//     type      : 'Delegate',
//     intentName: 'Greeting'
//   }
// }
//
// const messageOneParams = {
//   botAlias : '$LATEST',
//   botName  : 'Mercury',
//   inputText: 'I want to look up a professor',
//   userId   : 'CONNOR'
// }
//
// const messageTwoParams = {
//   botAlias : '$LATEST',
//   botName  : 'Mercury',
//   inputText: 'Hidy',
//   userId   : 'CONNOR'
// }
//
// const messageThreeParams = {
//   botAlias : '$LATEST',
//   botName  : 'Mercury',
//   inputText: 'Kong',
//   userId   : 'CONNOR'
// }
//
// const Chatbot = () => {
//   const dispatch = useDispatch()
//
//   // FIXME: useEffect is causing a new bot to be created each time someone
//   //        navigates to the page
//   useEffect(() => {
//     dispatch(lexActions.startSession(startParams))
//   }, [dispatch])
//
//   const sendMessageOne = e => {
//     e.preventDefault()
//     dispatch(lexActions.sendMessage(messageOneParams))
//   }
//
//   const sendMessageTwo = e => {
//     e.preventDefault()
//     dispatch(lexActions.sendMessage(messageTwoParams))
//   }
//
//   const sendMessageThree = e => {
//     e.preventDefault()
//     dispatch(lexActions.sendMessage(messageThreeParams))
//   }
//
//   return (
//     <>
//       <button onClick={sendMessageOne}>Message 1</button>
//       <button onClick={sendMessageTwo}>Message 2</button>
//       <button onClick={sendMessageThree}>Message 3</button>
//     </>
//   )
// }
//
// export default Chatbot

