import Link             from 'next/link'
import React            from 'react'
import { StyledHeader, HeaderSVG } from './Header.styled'

const Header = ({ title }) =>
  <StyledHeader aria-label="Title: Mercury">
    <Link href={title.to}>
      <a aria-label='Logo'>
        <HeaderSVG />
      </a>
    </Link>
  </StyledHeader>

export default Header
