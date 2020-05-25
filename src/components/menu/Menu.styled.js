import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.ui[2]};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-100%)'
                                  : 'translateX(0%)'};
  
  a {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 2.5rem 1rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.hover[1]};
    }
  }
`
