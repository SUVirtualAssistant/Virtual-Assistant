import { classNames }               from '@shared/utils/classNames'
import React                        from 'react'
import Action                       from './Action'
import { SelectableItemsContainer } from './base/SelectableItemsContainer'

class ActionGroup extends SelectableItemsContainer {
  constructor(props) {
    super(props)
  }

  render() {
    const lastItemIndex = this.props.group.actions ? this.props.group.actions.length - 1 : 0
    return (
      <div
        className={this.getClassNames()}
        onClick={this.onRequestContainerSelection}
        onKeyDown={this.onKeyDown}
      >
        { this.props.group.actions && this.props.group.actions.map((item, index) => {
          return <Action
            item={item}
            onActionExecute={this.props.onActionExecute}
            selected={index === this.state.selectedItemIndex}
            tabbable={this.props.isLastGroup && index === this.state.selectedItemIndex}
            isFirstItemInGroup={index === 0}
            isLastItemInGroup={index === lastItemIndex}
            key={index}/>
        })}
      </div>
    )
  }

  getClassNames() {
    return classNames('k-quick-replies')
  }
}

export default ActionGroup
