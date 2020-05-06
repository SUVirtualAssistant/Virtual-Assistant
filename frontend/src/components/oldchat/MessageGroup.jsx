import { isAuthor }   from '@shared/utils'
import { classNames } from '@shared/utils/classNames'
import * as React     from 'react'
import Message        from './Message'


// todo: convert to functional component, there's no state here
class MessageGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.getMsgGroupClassNames()}>
        {this.getAuthorNameView()}
        {this.getGroupMessagesView()}
      </div>
    )
  }

  // todo: this can go away when converted to styled-component, pay
  //       close attention to how it is getting rendered on the
  //       correct side
  getMsgGroupClassNames() {
    return classNames('k-message-group',
      {
        'k-no-avatar': !this.props.group.author.avatarUrl,
        'k-alt'      : isAuthor(this.props.user, this.props.group.messages[0])
      })
  }

  getAuthorNameView() {
    let result = null
    if (this.props.group.author.name)
      result = <p className='k-author'>{this.props.group.author.name}</p>

    return result
  }

  /**
   *
   * @returns array of messages
   */
  getGroupMessagesView() {
    const lastItemIndex = this.props.group.messages.length - 1
    return this.props.group.messages.map((msg, index) =>
      [<Message item={msg}
                 selected={msg.selectionIndex === this.props.selectedItemIndex}
                 onRequestSelection={this.props.onRequestSelection}
                 tabbable={index === lastItemIndex && this.props.isLastGroup}
                 isFirstItemInGroup={index === 0}
                 isLastItemInGroup={index === lastItemIndex}
                 isOnlyItemInGroup={lastItemIndex === 0}
                 key={index}/>]
    )
  }
}

export default MessageGroup
