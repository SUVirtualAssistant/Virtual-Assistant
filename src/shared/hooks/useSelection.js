import isEqual                                             from 'lodash'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export const useSelection = ({
  disabled,
  onChange,
  initialSelectedItems = []
}) => {
  const isMounted = useRef(false)
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems)
  
  const onItemChange = useCallback(item => {
    if (disabled) return
    
    let selectedIndex
    selectedItems.forEach((selectedItem, index) => {
      if (isEqual(selectedItem, item))
        selectedIndex = index
    })
    
    if (selectedIndex === undefined) {
      setSelectedItems(selectedItems => selectedItems.concat(item))
      return
    }
    
    setSelectedItems(selectedItems =>
      removeAtIndex(selectedItems, selectedIndex)
    )
  }, [disabled, selectedItems])
  
  const clearSelection = useCallback(() => {
    if (disabled) return
    setSelectedItems([])
  }, [disabled])
  
  useEffect(() => {
    if (isMounted.current === true && onChange) {
      onChange({ selectedItems })
    }
  }, [onChange, selectedItems])
  
  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
  
  return {
    selectedItems,
    onItemChange,
    clearSelection
  }
}

const removeAtIndex = (array, index) => {
  const result = array.slice()
  result.splice(index, 1)
  return result
}