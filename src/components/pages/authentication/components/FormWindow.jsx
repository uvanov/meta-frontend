// Import modules
import React from 'react';
import styled from '@emotion/styled';
import {
  Flex,
  MarginContainer,
  Typography
} from '../../../ui';

// Styled Components
const StyledFormWindow = styled(Flex)`
   position: relative;
   z-index: 2;
   
   width: min-content;
   
   border-radius: 38px;
   margin-right: -250px;
   padding: 45px 85px;
   background-color: ${ ({ theme }) => theme.palette.bluegray };
`;

// Exports
export const FormWindow = ({ children, title, subtitle, ...remainingProps }) => {
  return (
    <StyledFormWindow
      direction='column'
      justifyContent='center'
      { ...remainingProps }
    >
      <Typography
        variant='title'
        color='gray'
        align='center'
        fullWidth
      >
        { title }
      </Typography>

      <MarginContainer
        bottom='29px'
      >
        <Typography
          variant='small'
          color='gray'
          align='center'
          fullWidth
        >
          { subtitle }
        </Typography>
      </MarginContainer>
      { children }
    </StyledFormWindow>
  );
};
