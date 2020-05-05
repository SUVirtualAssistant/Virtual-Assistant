import React, { forwardRef, useCallback, useRef } from 'react'
import { LabelInput }                             from './LabelInput'

export const LabelTest = forwardRef((props, ref) => {
  return <LabelInput ref={ref} />
})

