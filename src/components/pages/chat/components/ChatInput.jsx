// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  MarginContainer,
  Flex,
  Typography
} from '@ui/index';

// Styled Components
const InputLabel = styled(Typography)`
  content: 'Enter';
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.size.extrasmall};
`

// Exports
export const ChatInput = () => {
  return (
    <MarginContainer
      right='27px'
      left='27px'
    >
      <Flex
        direction='column'
        gap='8px'
      >

      </Flex>
    </MarginContainer>
  );
};
