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
::placeholder {
    color: palevioletred;
    text-transform: uppercase;
  }
  label {
    text-transform: uppercase;
    font-size: 14px;
  }
`

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.placeholder}</label>
      <StyledInput placeholder={props.placeholder} value={props.value} 
      onChange={props.onChange} id={props.id} />
    </div>

  )
}

export default Input