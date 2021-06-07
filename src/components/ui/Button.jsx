import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

export default styled.button `
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: ${props => props.wide ? "300px" : "auto"};
background-color: ${props => props.color ? colors[props.color] : '#000000'};
padding: 12px;
color: white;
text-transform: uppercase;
font-weight: 600;
height: 45px;
border: none;
border-radius: 4px;
`;