import React, { useEffect } from 'react'

const Tab = props => {
  useEffect(() => {
    props.addTab({
      id: props.id,
      title: props.title
    })
  }, [])

  return props.activeTab.id === props.id && props.children
}

export default Tab
