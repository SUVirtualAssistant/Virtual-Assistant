import styled from 'styled-components'

export const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  top: 17%;
  right: 1.5rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 20;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 800px) {
    top: 20%;
    right: 1rem;
    
    width: 1.5rem;
    height: 1.5rem;
  }
  
  div {
    position: relative;
    
    width: 2rem;
    height: 0.25rem;
    
    border-radius: .1rem;
    
    background: ${({ theme, open }) => open ? theme.su_red[1]
                                            : theme.icon[1]};
    transition: transform 0.3s linear,
                opacity 0.3s linear,
                background 0.3s linear;
    transform-origin: 1px;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)'
                                      : 'rotate(0)'};
    }
    
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0'
                                    : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)'
                                      : 'translateX(0)'};
    }
    
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)'
                                      : 'rotate(0)'};
    }
    
    @media (max-width: 800px) {
      width: 1.5rem;
      height: 0.20rem;
    }
  }
`
