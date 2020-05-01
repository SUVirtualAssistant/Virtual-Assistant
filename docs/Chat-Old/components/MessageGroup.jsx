import React                    from 'react'
import { classNames, isAuthor } from '../utils'
import Message                  from './Message'
import Attachment               from './Attachment'

class MessageGroup extends React.Component {
  render() {
    return (
      <div className={ this.getMsgGroupClassNames() }>
        {this.getAvatarView()}
        {this.getAuthorNameView()}
        {this.getGroupMessagesView()}
      </div>
    )
  }
  
  getMsgGroupClassNames() {
    return classNames('k-message-group', {
      'k-no-avatar': !this.props.group.author.avatarUrl,
      'k-alt': isAuthor(this.props.user, this.props.group.messages[0])
    })
  }
  
  getAvatarView() {
    let result = null
    if (this.props.group.author.avatarUrl)
      result = <img src={this.props.group.author.avatarUrl} className='k-avatar' alt='avatar' />
    return result
  }
  
  getAuthorNameView() {
    let result = null
    if (this.props.group.author.name)
      result = <p className='k-author'>{ this.props.group.author.name }</p>
    return result
  }
  
  getGroupMessagesView() {
    const lastItemIndex = this.props.messages.length - 1
    return this.props.messages.map((msg, index) => {
      let result = [ <Message item={msg}
                              template={this.props.itemTemplate}
                              selected={msg.selectionIndex === this.props.selectedItemIndex}
                              onRequestSelection={this.props.onRequestSelection}
                              tabbable={index === lastItemIndex && this.props.isLastGroup}
                              isFirstItemInGroup={index === 0}
                              isLastItemInGroup={index === lastItemIndex}
                              isOnlyItemInGroup={lastItemIndex === 0}
                              key={index} /> ]
      if (msg.attachments && msg.attachments.length === 1)
        result.push(<Attachment item={msg.attachments[0]}
                                 template={this.props.attachmentTemplate}
                                 selected={false}
                                 key={"att-" + index} /> )
      return result
    })
  }
}

export default MessageGroup