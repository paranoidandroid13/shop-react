import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

const StyledError = styled.div `
display: flex;
/* justify-content: center; */
align-items: center;
text-align: center;
padding-bottom: 12px;
color: ${colors.main};
/* text-transform: uppercase; */
font-weight: 400;
font-size: 12px;
`;

const Error = (props) => {
  return (
    <StyledError text={props.text}>
      {props.children || props.text}
    </StyledError>
  )
}

export default Error