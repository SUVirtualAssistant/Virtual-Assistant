import Loading                        from '@components/loading'
import _                              from 'lodash'
import React, { useEffect, useState } from 'react'
import styled                         from 'styled-components'

const Card = styled.div`
  grid-column: cards;
  
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-content: center;
  
  border-radius: .5rem;
  background: ${({ theme }) => theme.ui[1]};
  
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .2em;
`

const Content = styled.h2`
  position: relative;
  font-size: 2rem;
  padding: 1rem;
  
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`

export const InfoCard = ({
  title,
  url
}) => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState(null)
  
  useEffect(() => {
    if (!loaded && title != null) {
      setLoaded(true)
      
      fetch(url)
      .then(res => res.json())
      .then(result => setData(_.get(result, title)))
    }
  }, [])
  
  return (
    <Card>
      {data ? <>
               <h3>{title}</h3>
               <Content>{data}</Content>
             </>
            : <Loading/>}
    </Card>
  )
}

export default InfoCard