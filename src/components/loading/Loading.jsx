import React  from 'react'
import styled from 'styled-components'

const LoadingSpinner = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  margin: auto;
  position: relative;
  border-radius: 50%;
  animation: spin 3s linear infinite;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #aa0000;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const MiddleSpinner = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  margin: auto;
  position: relative;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #aa0000;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const Loading = () =>
  <LoadingSpinner>
      <MiddleSpinner>

      </MiddleSpinner>
  </LoadingSpinner>
