import React from 'react'

class Toolbar extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='k-toolbar-box'>
        <div className='k-button-list'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Toolbar