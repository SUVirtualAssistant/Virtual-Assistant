import * as React     from 'react'
import * as PropTypes from 'prop-types'

import { classNames, Keys }       from '../../utils'

class Toolbar extends React.Component {
  static propTypes = {
    tabIndex: PropTypes.number,
    dir: PropTypes.string,
    keyboardNavigation: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    onResize: PropTypes.func
  }
  
  static defaultProps = {
    tabIndex: 0
  }
  
  _element = null
  buttons = []
  focusedIndex = 0
  counter = 0
  offsetHeight = 0
  offsetWidth = 0
  
  mapToolbarChild = tool => {
    if (tool.type === ButtonGroup)
      return React.cloneElement(tool, tool.props, React.Children.map(tool.props.children, this.mapItemChildren))
    return toolbarItem
  }
  
  mapItemChildren = tool => {
    if (tool.type === ButtonGroup)
      return React.cloneElement(tool, tool.props, React.Children.map(tool.props.children, this.mapButton))
    return this.mapButton(tool)
  }
  
  mapButton = button => {
    const index = this.counter
    this.counter++
    return <ToolbarButton ref={(b) => this.buttonRef(b, index)}
                     tabIndex={this.focusedIndex === index ? (this.props.tabIndex || Toolbar.defaultProps.tabIndex) : -1}
                     button={button} />
  }
  
  buttonRef = (button, index) => {
    this.buttons[index] = button
    if (!button && !this.buttons.find((b) => b !== null ))
      this.buttons.length = 0
  }
  
  onKeyDown = event => {
    const target = event.target
    const _a = this, focusedIndex = _a.focusedIndex, buttons = _a.buttons
    const arrowKey = event.keyCode === Keys.left || event.keyCode === Keys.right
    
    if (!arrowKey || event.defaultPrevented || buttons.findIndex(b => b !== null && b.element === target) === -1)
      return
    
    if (event.keyCode === Keys.left)
      this.focusButton(focusedIndex, focusedIndex - 1)
    else
      this.focusButton(focusedIndex, focusedIndex + 1)
  }
  
  onWindowResize = event => {
    const element = this.element
    
    if (!element)
      return
    
    const offsetWidth = element.offsetWidth
    const offsetHeight = element.offsetHeight
    
    if (this.offsetWidth !== offsetWidth || this.offsetHeight !== offsetHeight) {
      
      this.offsetWidth = offsetWidth
      this.offsetHeight = offsetHeight
      
      const newSizes = { offsetWidth: this.offsetWidth, offsetHeight: this.offsetHeight }
      
      if (this.props.onResize)
        this.props.onResize.call(undefined, { target: this }, newSizes, { nativeEvent: event })
    }
  }
  
  componentDidMount () {
    window.addEventListener('resize', this.onWindowResize)
    const element = this.element
    if (element) {
      this.offsetWidth = element.offsetWidth
      this.offsetHeight = element.offsetHeight
    }
  }
  
  componentDidUpdate (prevProps, prevState, snapshot) {
    const element = this.element
    if (!element || this.props.keyboardNavigation === false)
      return
    
    const focused = element.querySelector('button:focus')
    const prevFocusedIndex = this.focusedIndex
    
    if (!focused) {
      this.focusedIndex = 0
    } else {
      const focusedIndex = this.buttons.findIndex(b => b !== null && b.element === focused)
      if (focusedIndex !== -1 && focusedIndex !== this.focusedIndex) {
        this.focusedIndex = focusedIndex
      }
    }
    
    if (prevFocusedIndex !== this.focusedIndex) {
      const _a = this.props.tabIndex, tabIndex_1 = _a === void 0 ? Toolbar.defaultProps.tabIndex : _a
      this.buttons.forEach((button, index) => {
        if (button)
          button.tabIndex = (index === this.focusedIndex && button.tabIndex === -1) ? tabIndex_1 : -1
      })
    }
  }
  
  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize)
  }
  
  focusButton(prevIndex, index) {
    const toolbarButton = this.buttons[index]
    if (toolbarButton) {
      const newFocused = toolbarButton.element
      const currentFocused = this.element &&
        this.element.querySelector('button:focus')
      const _a = this.props.tabIndex, tabIndex = _a === void 0 ? Toolbar.defaultProps.tabIndex : _a
      this.focusedIndex = index
      if (currentFocused !== newFocused) {
        toolbarButton.tabIndex = tabIndex
        toolbarButton.focus()
        const prevButton = this.buttons[prevIndex]
        if (prevButton) {
          prevButton.tabIndex = -1
        }
      }
    }
  }
}

// Object.defineProperty(Toolbar.prototype, "element", {
//   /**
//    * Returns the HTML element of the Toolbar component
//    */
//   get: function () {
//     return this._element
//   },
//   enumerable: true,
//   configurable: true
// })

export default Toolbar