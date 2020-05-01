import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.div`

`

const StyledMessageList = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const StyledMessageListContent = styled.div`
  padding: 16px 16px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;
`
