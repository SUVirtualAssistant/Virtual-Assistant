import styled from 'styled-components'

export const StyledMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  
  z-index: 10;
  
  background: ${({ theme }) => theme.active['UI']};
  
  height: 100%;
  left: 100%;
  width: 300px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-100%)'
                                  : 'translateX(0%)'};
  
  a {
    margin: 1.5rem 0 0 15%;
    
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.text[1]};
    
    cursor: pointer;
    z-index: 10000;
    
    transition: color 0.1s linear;
    
    :hover {
      color: ${({ theme }) => theme.su_red[1]};
    }
  }
  
  @media screen and (max-height: 700px) {
    padding-top: 5%;
    
    a {
      margin: 1rem 0 0 15%;
      font-size: 1rem;
    }
  }
`
