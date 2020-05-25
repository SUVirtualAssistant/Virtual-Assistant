import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.active['UI']};
  justify-content: center;
  
  height: 100%;
  text-align: center;
  position: fixed;
  left: 100%;
  width: 40%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-100%)'
                                  : 'translateX(0%)'};
  
  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 2.5rem 1rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    transition: color 0.3s linear;
    cursor: pointer;
    
    text-decoration: none;
    color: ${({ theme }) => theme.text[1]};
    
    &:hover {
      color: ${({ theme }) => theme.su_red[1]};
    }
  }
`
