import { isAuthor }   from '@shared/utils'
import { classNames } from '@shared/utils/classNames'
import * as React     from 'react'
import Message        from './Message'

class MessageGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      React.createElement('div', { className: this.getMsgGroupClassNames() },
        this.getAvatarView(),
        this.getAuthorNameView(),
        this.getGroupMessagesView())
    )
  }

  getMsgGroupClassNames() {
    return classNames('k-message-group',
      {
        'k-no-avatar': !this.props.group.author.avatarUrl,
        'k-alt'      : isAuthor(this.props.user, this.props.group.messages[0])
      })
  }

  getAvatarView() {
    let result = null
    if (this.props.group.author.avatarUrl)
      result = <img className='k-avatar' src={this.props.group.author.avatarUrl} alt="user avatar"/>

    return result
  }

  getAuthorNameView() {
    let result = null
    if (this.props.group.author.name)
      result = <p className='k-author'>{this.props.group.author.name}</p>

    return result
  }

  getGroupMessagesView() {
    const lastItemIndex = this.props.group.messages.length - 1

    return (
      this.props.group.messages.map((msg, index) => {
        return [(React.createElement(Message, {
          item              : msg,
          template          : this.props.itemTemplate,
          selected          : msg.selectionIndex === this.props.selectedItemIndex,
          onRequestSelection: this.props.onRequestSelection,
          tabbable          : index === lastItemIndex && this.props.isLastGroup,
          isFirstItemInGroup: index === 0,
          isLastItemInGroup : index === lastItemIndex,
          isOnlyItemInGroup : lastItemIndex === 0,
          key               : index
        }))]
      })
    )
  }
}

export default MessageGroup
