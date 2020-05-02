import * as React from 'react'

const Toolbar = ({ children }) =>
  <div className="k-toolbar-box">
    <div className="k-button-list">
      {children}
    </div>
  </div>

export default Toolbar


