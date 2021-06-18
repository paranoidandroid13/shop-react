import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${(props) => (props.wide ? '300px' : 'auto')};
  background-color: ${(props) => (props.color ? colors[props.color] : 'transparent')};
  padding: 12px;
  color: ${(props) => (props.textColor ? colors[props.textColor] : 'white')};
  text-transform: uppercase;
  font-weight: 600;
  height: 45px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  :focus {
    border: none;
  }
`

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      textColor={props.textColor}
      wide={props.wide}
      color={props.color}
    >
      {props.children}
    </StyledButton>
  )
}

export default Button
