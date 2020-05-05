import React from 'react'

class FocusableUponSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (!prevProps.selected && this.props.selected)
      this.elementToFocus.focus()
  }
}

export { FocusableUponSelect }
