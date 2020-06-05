import styled, { css } from 'styled-components'

export const ToggleButton = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  margin-left: 38%;
  
  position: absolute;
  top: 75%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  transition: background .5s ease;
  
  :before {
    content: "";
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50px;
    background: ${({ theme }) => theme.background};
    transition: border-radius .5s ease,
                background .5s ease,
                width .5s ease,
                transform .5s ease;
  };
  
  :after {
    content: "Light mode";
    white-space: nowrap;
    text-indent: -22px;
    line-height: 150px;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.active['UI']};
    box-shadow: 0 0 0 0 ${({ theme }) => theme.active['UI']},
                0 0 0 3px ${({ theme }) => theme.background},
                0 0 0 40px ${({ theme }) => theme.active['UI']};
    box-sizing: border-box;
    transition: border-color .5s ease, box-shadow .5s ease;
  };
  
  ${props => props.themeMode === 'dark' && css`
    :before {
      background: ${({ theme }) => theme.background};
      border-radius: 50%;
      width: 80%;
      transform: translate(-10%, -35%) rotate(-25deg);
    };
    
    :after {
      content: "Dark mode";
      box-shadow: 0 0 0 0 ${({ theme }) => theme.active['UI']},
                  0 0 0 0 ${({ theme }) => theme.active['UI']},
                  0 0 0 3px ${({ theme }) => theme.background},
                  0 0 0 40px ${({ theme }) => theme.active['UI']};
      border-color: ${({ theme }) => theme.active['UI']};
    };
  `};
  
  @media screen and (max-height: 700px) {
    :after { content: ''; }
  }
`
