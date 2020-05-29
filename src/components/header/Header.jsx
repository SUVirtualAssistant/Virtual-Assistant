import Link             from 'next/link'
import React            from 'react'
import { StyledHeader, HeaderSVG } from './Header.styled'

const Header = ({ title }) =>
  <StyledHeader>
    <Link href={title.to}>
      <a aria-label={title.ariaLabel}>
        <HeaderSVG />
      </a>
    </Link>
  </StyledHeader>

export default Header
