// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Styled Components
const StyledRelative = styled.div`
  position: relative;
`;

// Exports
export const Relative: React.FC = ({ children, ...remainingProps }) => {
  return (
    <StyledRelative { ...remainingProps }>
      { children }
    </StyledRelative>
  );
};
