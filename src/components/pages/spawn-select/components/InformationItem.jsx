// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Flex,
  Typography
} from '@ui/index';

// Styled Components
const IconWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.darkbluegray};
`

// Exports
export const InformationItem = ({ Icon, title, body }) => {
  return (
    <Flex>
      <IconWrapper
        justifyContent='center'
        alignItems='center'
      >
        <Icon/>
      </IconWrapper>

      <Flex>
        <Typography
          variant='small'
          color='gray'
        >
          { title }
        </Typography>
        <Typography
          variant='small'
          color='white'
          bold
        >
          { body }
        </Typography>
      </Flex>
    </Flex>
  );
};
