import Link             from 'next/link'
import React            from 'react'
import { StyledHeader } from './Header.styled'

const Header = ({ title }) =>
  <StyledHeader>
    <Link href={title.to}>
      <a aria-label={title.ariaLabel}>
        {title.name}
      </a>
    </Link>
  </StyledHeader>

export default Header
