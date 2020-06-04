import { useOnClickOutside }                    from '@shared/hooks'
import React, { useCallback, useRef, useState } from 'react'
import styled                                   from 'styled-components'

const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  
  border: none;
  padding: 1rem;
  outline: none;
  cursor: pointer;
  
  ${({ theme }) => theme.type.expressiveParagraph};
  
  transition: color 0.3s ease,
              background-color 0.3s ease;
  
  color: ${({ theme, active }) => active ? theme.inverse[1]
                                         : theme.text[1]};
  background-color: ${({ theme, active }) => active ? theme.inverse['background']
                                                    : theme.ui[2]};
  :hover {
    color: ${({ theme, active }) => active ? theme.text[5]
                                           : theme.text[1]};
    
    background-color: ${({ theme, active }) => active ? theme.inverse['background']
                                                      : theme.hover['selectedUI']}CC;
  }
  
  @media (max-width: 800px) {
    max-height: 46px;
  }
`

const AccordionIcon = styled.svg`
  margin-left: auto;
  transition: transform 0.3s ease,
              fill 0.3s ease-in-out;
  height: 1rem;
  width: 1rem;
  fill: ${({ theme, active }) => active ? theme.su_red[1]
                                        : theme.icon[2]};
  transform: ${({ active }) => active ? 'rotate(90deg)'
                                      : 'rotate(-90deg)'};
`

const Content = styled.div`
  overflow: hidden;
  
  background: ${({ theme }) => theme.ui[3]}80;
  transition: max-height 0.5s ease-in-out;
  max-height: ${props => props.height};
  
  a {
    ${({ theme }) => theme.type.productiveHeading[3]};
    color: ${({ theme }) => theme.text['link']};
    
    :hover {
      color: ${({ theme }) => theme.ui[7]};
    }
  }
`

const Text = styled.div`
  padding: 1rem;
`

const Accordion = props => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  
  const contentRef = useRef(null)
  const accordionRef = useRef()
  
  useOnClickOutside(accordionRef, useCallback(() => {
    setActive(false)
    setHeight('0px')
  }, []))
  
  const toggleAccordion = () => {
    const { current } = contentRef
    
    setActive(!active)
    setHeight(active ? '0px' : `${current.scrollHeight}px`)
  }
  
  return (
    <StyledAccordion ref={accordionRef}>
      <AccordionButton onClick={toggleAccordion}
                       active={active}>
        <p>{props.title}</p>
        <AccordionIcon active={active}
                       viewBox="0 0 266 438"
                       xmlns="http://www.w3.org/2000/svg">
          <path
            d="m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"/>
        </AccordionIcon>
      </AccordionButton>
      <Content ref={contentRef}
               height={height}>
        <Text dangerouslySetInnerHTML={{ __html: props.content }}/>
      </Content>
    </StyledAccordion>
  )
}

export default Accordion
