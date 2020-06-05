import styled from 'styled-components'

export const StyledMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  
  z-index: 10;
  
  background-color: ${({ theme }) => theme.active['UI']};
  
  height: 100%;
  left: 100%;
  width: 350px;
  transition: transform 300ms cubic-bezier(0.5, 0, 0.1, 1);
  transform: ${({ open }) => open ? 'translateX(-100%)'
                                  : 'translateX(0%)'};
  
  a {
    z-index: 10000;
    margin: 1.5rem 0 0 15%;
    cursor: pointer;
    
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    text-decoration: none;
    
    transition: color 250ms cubic-bezier(0.5, 0, 0.1, 1);
    color: ${({ theme }) => theme.text[1]};
    
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
