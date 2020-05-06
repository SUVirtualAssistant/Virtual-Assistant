import React, { useCallback, useRef } from 'react'
import { LabelTest } from '@components/focus_test/LabelTest'

const TestPage = () => {
  const ref = useRef()

  const onClick = useCallback(
    () => {
      ref.current.focus()
      ref.current.input.focus()
    }, [])


  return (
    <>
      <button onClick={onClick}>focus input</button>
      <LabelTest ref={ref}/>

      {/*<List />*/}
    </>
  )
}

export default TestPage
