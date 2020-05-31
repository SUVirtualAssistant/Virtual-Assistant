import { useEffect, useLayoutEffect, useState } from 'react'
import { debounce }                             from '../utils'

export const useDimensions = targetRef => {
  const getDimensions = () => ({
    width: targetRef.current ? targetRef.current.offsetWidth : 0,
    height: targetRef.current ? targetRef.current.offsetHeight : 0
  })
  
  const [dimensions, setDimensions] = useState(getDimensions)
  
  const handleResize = debounce(() => setDimensions(getDimensions()))
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useLayoutEffect(() => {
    handleResize()
  }, [])
  
  return dimensions
}
