import * as React from 'react'
import styled     from 'styled-components'

const Marker = styled.div`
  text-transform: uppercase;
  opacity: 0.7;
  font-size: smaller;
  line-height: normal;
  text-align: center;
  align-self: stretch;
`

class DateMarker extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const item = this.props.item
    
    return (
      <div className='k-timestamp'>
        {item.timestamp}
      </div>
    )
  }
}

export default DateMarker
