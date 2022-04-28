// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Typography,
  Flex
} from '@ui/index';

// Styled Components
const StyledDataSection = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.bluegray};
  border-radius: 9px;
  padding: 27px 20px 27px 30px;
`;

// Exports
export const DataSection = ({ name, value }) => {
  return (
    <StyledDataSection
      justifyContent='space-between'
      gap='20px'
    >
      <Typography variant='small' color='gray'>
        { name }
      </Typography>
      <Typography variant='small' color='#E4DCFF'>
        { value }
      </Typography>
    </StyledDataSection>
  );
};
