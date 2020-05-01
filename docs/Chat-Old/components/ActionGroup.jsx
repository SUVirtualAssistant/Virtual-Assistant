import * as React     from 'react'
import { classNames } from '../utils'
import Action         from './Action'
import { SelectableItemsContainer } from './base/SelectableItemsContainer'

class ActionGroup extends SelectableItemsContainer {
  render() {
    const lastItemIndex = this.props.group.actions ? this.props.group.actions.length - 1 : 0
    
    return (
      <div className={this.getClassNames()}
           onClick={this.onRequestContainerSelection}
           onKeyDown={this.onKeyDown}>
        {
          this.props.group.actions &&
          this.props.group.actions.map(
            (item, index) =>
              <Action item={item}
                      onActionExecute={this.props.onActionExecute}
                      selected={index === this.state.selectedItemIndex}
                      tabbable={this.props.isLastGroup && this.state.selectedItemIndex}
                      isFirstItemInGroup={index === 0}
                      isLastItemInGroup={index === lastItemIndex}
                      key={index} />
          )
        }
      </div>
    )
  }
  
  getClassNames() {
    return classNames('k-quick-replies')
  }
}

export default ActionGroup