// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Typography,
  MarginContainer, Flex
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';

// Styled Components
const StyledMessagesArea = styled(Flex)`
  height: 100%;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => addHexAlpha(theme.palette.black, 0.1)};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => addHexAlpha(theme.palette.black, 0.4)};
    border-radius: 8px;
  }
`

// Exports
export const MessagesArea = ({ messages }) => {
  return (
    <MarginContainer
      right='27px'
      left='27px'
      style={ { height: '100%' } }
    >
      <StyledMessagesArea
        direction='column'
        gap='16px'
      >
        {
          messages && messages.map(message => (
            <Typography variant='small' color='black'>
              { message }
            </Typography>
          ))
        }
      </StyledMessagesArea>
    </MarginContainer>
  );
};
