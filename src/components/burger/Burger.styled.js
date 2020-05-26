import styled from 'styled-components'

export const StyledBurger = styled.button`
  position: absolute;
  top: 20%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 800px) {
    top: 15%;
  }
  
  div {
    width: 1.8rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.su_red[1]
                                            : theme.icon[1]};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
