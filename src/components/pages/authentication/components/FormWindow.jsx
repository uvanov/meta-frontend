// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '../../../ui';

// Styled Components
const StyledFormWindow = styled(Flex)`
   position: relative;
   z-index: 2;
   
   padding: 45px 85px;
   background-color: ${({ theme }) => theme.palette.bluegray};
`;

// Exports
export const FormWindow: React.FC = ({ children, ...remainingProps }) => {
  return (
    <StyledFormWindow
      direction='column'
      justifyContent='center'
      { ...remainingProps }
    >
      { children }
    </StyledFormWindow>
  );
};
