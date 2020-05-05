import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export const LabelInput = forwardRef((props, ref) => {
  const labelRef = useRef()
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
    get input() {
      return inputRef.current
    },
    get label() {
      return labelRef.current
    }
  }))

  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
})
