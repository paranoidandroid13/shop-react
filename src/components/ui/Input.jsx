import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
display: flex;
width: 300px;
height: 45px;
border-radius: 5px;
border: 1px solid ${colors.main};
outline: none;
color: ${colors.main};
margin-bottom: 12px;
padding: 12px;
::placeholder {
    color: palevioletred;
    text-transform: uppercase;
  }
`

const StyledLabel = styled.label`
    text-transform: uppercase;
    font-size: 14px;
    color: ${colors.main};
    font-weight: 500;
    line-height: 1.5;
    padding-left: 2px;
`

const Input = (props) => {
  return (
    <div>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledInput type={props.type || 'text'} placeholder={props.placeholder} value={props.value} 
      onChange={props.onChange} id={props.id} />
    </div>

  )
}

export default Input