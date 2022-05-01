// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { addHexAlpha } from '@lib/utils';

// Styled Components
const StyledCharacterCard = styled.div`
  padding: 32px 37px 48px 21px;
  background: linear-gradient(180deg,
                              ${({ theme }) => theme.palette.bluegray}, 
                              ${({ theme }) => addHexAlpha(theme.palette.bluegray, 0.1)});
  border-radius: 38px;
`;

// Exports
export const CharacterCard = ({ children, ...remainingProps }) => {
  return (
    <StyledCharacterCard { ...remainingProps }>
      { children }
    </StyledCharacterCard>
  );
};
