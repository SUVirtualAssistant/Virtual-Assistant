import styled, { css } from 'styled-components'

export const Toggle = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: background-color .5s ease;
  
  align-self: center;
`

export const ToggleButton = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f5f8f8;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color .5s ease;
  
  :before {
    content: "";
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    background: #A5abb0;
    transition: border-radius .5s ease,
                background-color .5s ease,
                width .5s ease,
                transform .5s ease;
  };
  
  :after {
    content: "Light mode";
    white-space: nowrap;
    text-indent: 60px;
    line-height: 45px;
    z-index: 2;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #f5f8f8;
    box-shadow: 0 0 0 0 #f5f8f8,
                0 0 0 3px #a5abb0,
                0 0 0 100px #f5f8f8;
    box-sizing: border-box;
    transition: border-color .5s ease,
                box-shadow .5s ease;
  };
  
  ${props => props.theme === 'dark' && css`
    background-color: #a5abb0;
    
    :before {
      background: #3f3f4c;
      border-radius: 50%;
      width: 150%;
      transform: translate(-5%, -35%)
                 rotate(-25deg);
    };
    
    :after {
      content: "Dark mode";
      box-shadow: 0 0 0 0 #3f3f4c,
                  0 0 0 0 #3f3f4c,
                  0 0 0 3px #a5abb0,
                  0 0 0 100px #3f3f4c;
      border-color: #3f3f4c;
    };
  `};
`

// position: relative;
// width: 80px;
// height: 40px;
// margin: 10px auto;
// border-radius: 40px;
//
//
// & ${HiddenToggle}:checked + ${ToggleSpan} {
//   background-color: #000;
// }
//
// & ${HiddenToggle}:active + ${ToggleSpan} {
//   opacity: 0.5;
// }
//
// & ${HiddenToggle}:checked + ${ToggleSpan}:before {
//   background-color: #000;
//   transform: translate(56px,-19px);
// }
//
// & ${HiddenToggle}:checked + ${ToggleSpan}:after {
//   background-color: #fff;
//   transform: translate(29px,0px);
// }

