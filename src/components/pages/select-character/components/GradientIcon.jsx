// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Flex } from '@ui/index';

// Styled Components
const StyledGradientIcon = styled(Flex)`
  background: linear-gradient(152.87deg, 
                              ${ ({ theme }) => theme.palette.red } -40.12%,                         
                              ${ ({ theme }) => theme.palette.orange } 148.17%);
  box-shadow: 0px 15px 59px -15px #ff6b43;
  border-radius: 10px;
  width: 65px;
  height: 65px;
  
  svg {
    transform: scale(1.5);
    
    path {
      fill: rgba(0, 0, 0, 1)
    } 
  }
`;

// Exports
export const GradientIcon = ({ Icon }) => {
  return (
    <StyledGradientIcon
      justifyContent='center'
      alignItems='center'
    >
      <Icon/>
    </StyledGradientIcon>
  );
};
