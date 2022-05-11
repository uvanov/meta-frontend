// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local components
import {
  Flex,
  Typography
} from '@ui/index';

// Styled Components
const ControlHintWrapper = styled(Flex)`
  & path {
    fill: ${({ theme }) => theme.palette.white};
  }
`

const ControlText = styled(Typography)`
  font-style: italic;
`

const ButtonKey = styled(Flex)`
  height: 26px;
  width: 26px;
  background: ${({ theme }) => theme.gradient.orangeRed(270)};
  border-radius: 4px;
`

// Exports
export const ControlHint = ({ Icon, text, buttonKey }) => {
  return (
    <ControlHintWrapper
      alignItems='center'
      gap='10px'
    >
      <Icon/>
      <ControlText
        variant='extrasmall'
        color='white'
        semiBold
      >
        { text }
      </ControlText>
      <ButtonKey
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant='small'
          color='white'
        >
          { buttonKey }
        </Typography>
      </ButtonKey>
    </ControlHintWrapper>
  );
};
