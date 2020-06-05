import Link   from 'next/link'
import React  from 'react'
import styled from 'styled-components'
import logo   from '../../shared/icons/Mercury_Logo.svg'

export const StyledHeader = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  left: 0;
  
  z-index: 0;

  @media (max-width: 800px) {
    height: 40px;
  }
`

export const HeaderSVG = styled(logo)`
  margin-left: 10px;
  margin-top: 10px;
  height: 55px;
  
  z-index: 1;
  
  @media (max-width: 800px) {
    height: 40px;
  }
`

const Header = ({ title }) =>
  <StyledHeader aria-label="Title: Mercury">
    <Link href={title.to}>
      <a aria-label='Logo'>
        <HeaderSVG/>
      </a>
    </Link>
  </StyledHeader>

export default Header
