// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { addHexAlpha } from '@lib/utils';

// Styled Components
const StyledCharacterCard = styled.div`
  padding: 32px 27px 48px 21px;
  background: linear-gradient(180deg, ${({ theme }) => addHexAlpha(theme.palette.bluegray, 0.1)}, 0%, 
                                      ${({ theme }) => theme.palette.bluegray} 100%);
  border-radius: 38px;
`;

// Exports
export const CharacterCard = ({ children }) => {
  return (
    <StyledCharacterCard>
      { children }
    </StyledCharacterCard>
  );
};
