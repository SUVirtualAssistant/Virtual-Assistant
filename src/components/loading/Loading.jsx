import React  from 'react'
import styled from 'styled-components'

const LoadingSpinner = styled.div`
  background: ${({ theme }) => theme.background};
  
  width: 3rem;
  height: 3rem;
  margin: auto;
  position: relative;
  
  border-radius: 50%;
  border: .1rem solid ${({ theme }) => theme.ui[2]};
  border-top: .1rem solid #aa0000;
  
  animation: spin 3s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const MiddleSpinner = styled.div`
  width: .5rem;
  height: .5rem;
  margin: auto;
  position: relative;
  
  border-radius: 50%;
  border: .1rem solid #f3f3f3;
  border-top: .1rem solid #aa0000;
  
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const Loading = () =>
  <LoadingSpinner>
      <MiddleSpinner/>
  </LoadingSpinner>
