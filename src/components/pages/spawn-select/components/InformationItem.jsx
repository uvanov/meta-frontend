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
  height: 40px;
  width: 40px;
  background-color: #16151D;
`

// Exports
export const InformationItem = ({ Icon, title, body }) => {
  return (
    <Flex
      alignItems='center'
      gap='12px'
    >
      <IconWrapper
        justifyContent='center'
        alignItems='center'
      >
        <Icon/>
      </IconWrapper>

      <Flex
        direction='column'
      >
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
          { body ? body : 'Отсутствует' }
        </Typography>
      </Flex>
    </Flex>
  );
};
