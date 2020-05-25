import { bool, func }   from 'prop-types'
import React            from 'react'
import { StyledBurger } from './Burger.styled'

const Burger = ({
  open,
  setOpen
}) => {
  return (
    <StyledBurger open={open}
                  onClick={() => setOpen(!open)}
                  aria-label="Open menu">
      <div/>
      <div/>
      <div/>
    </StyledBurger>
  )
}

Burger.propTypes = {
  open   : bool.isRequired,
  setOpen: func.isRequired
}

export default Burger
