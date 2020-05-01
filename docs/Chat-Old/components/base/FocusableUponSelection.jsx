import * as React from 'react'

class FocusableUponSelection extends React.Component {
  constructor (props) {
    super(props)
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.selected && this.props.selected)
      this.elementToFocus.focus()
  }
}

export { FocusableUponSelection }
