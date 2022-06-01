// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { formatColorTags } from '@lib/utils';
import {
  Flex,
  Typography
} from '@ui/index';

// Styled Components
const StyledNotificationInner = styled.div`
  color: ${({ theme }) => theme.palette.white}
`;

// Exports
export const NotificationBody = ({ Icon, title, text }) => {
  const preparedString = formatColorTags(text);

  return (
    <Flex
      alignItems='center'
      gap='16px'
    >
      <Icon/>
      <Flex
        direction='column'
        gap='8px'
      >
        <Typography
          variant='middle'
          color='white'
          bold
        >
          { title }
        </Typography>
        <StyledNotificationInner
          dangerouslySetInnerHTML={ { __html: preparedString } }
        />
      </Flex>
    </Flex>
  );
};
