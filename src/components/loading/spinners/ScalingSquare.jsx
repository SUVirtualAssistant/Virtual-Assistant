import PropTypes from 'prop-types'
import React     from 'react'
import styled    from 'styled-components'

const StyledScalingSquares = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  
  align-self: center;
  justify-self: center;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: scaling-squares-animation ${props => props.animationDuration}ms;
  animation-iteration-count: infinite;
  transform: rotate(0deg);

  * {
    box-sizing: border-box;
  }

  .square {
    height: calc(${props => props.size}px * 0.25 / 1.3);
    width: calc(${props => props.size}px * 0.25 / 1.3);
    margin-right: auto;
    margin-left: auto;
    border: calc(${props => props.size}px * 0.04 / 1.3) solid ${({ theme }) => theme.ui[3]};
    position: absolute;
    animation-duration: ${props => props.animationDuration}ms;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: scaling-squares-spinner-animation-child-1;
  }
  .square:nth-child(2) {
    animation-name: scaling-squares-spinner-animation-child-2;
  }
  .square:nth-child(3) {
    animation-name: scaling-squares-spinner-animation-child-3;
  }
  .square:nth-child(4) {
    animation-name: scaling-squares-spinner-animation-child-4;
  }
  @keyframes scaling-squares-animation {
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
    }
  }
`

const propTypes = {
  size             : PropTypes.number,
  animationDuration: PropTypes.number,
  style            : PropTypes.object
}

const defaultProps = {
  size             : 65,
  animationDuration: 1250
}

const generateSpinners = num =>
  Array.from({ length: num })
       .map((val, index) => <div key={index} className="square"/>)

const ScalingSquares = ({
  size,
  animationDuration,
  ...props
}) => (
  <StyledScalingSquares size={size}
                        animationDuration={animationDuration}
                        className={`scaling-squares-spinner`}
                        {...props}>
    {generateSpinners(4)}
  </StyledScalingSquares>
)

ScalingSquares.propTypes = propTypes
ScalingSquares.defaultProps = defaultProps

export default ScalingSquares