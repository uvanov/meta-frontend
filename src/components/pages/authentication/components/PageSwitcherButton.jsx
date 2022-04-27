// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  Flex,
  Typography
} from '../../../ui';

// Styled Components
const StyledButton = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  
  ${({ variant }) => variant === 'default' && css`
    background: rgba(20, 19, 30, 0.2);
  `}
  
  ${({ variant }) => variant === 'red' && css`
    background: #FF3E3E;
  `}
`;


// Exports
export const PageSwitcherButton = (
  {
    variant,
    iconSrc,
    text,
    onClick
  }) => {
  return (
    <StyledButton
      variant={ variant }
      onClick={ onClick }
    >
      <Flex
        gap='9px'
        justifyContent='center'
        alignItems='center'
      >
        <img
          src={ iconSrc }
          alt=''
        />
        <Typography
          color={ variant === 'red' ? 'white' : 'gray' }
          variant='middle'
        >
          { text }
        </Typography>
      </Flex>
    </StyledButton>
  );
};
