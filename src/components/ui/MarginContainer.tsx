// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Styled Components
const StyledMargin = styled.div<MarginProps>`
  ${({ top }) => top && css`
    margin-top: ${ top };
  `}
  
  ${({ right }) => right && css`
    margin-right: ${ right };
  `}
  
  ${({ bottom }) => bottom && css`
    margin-bottom: ${ bottom };
  `}
  
  ${({ left }) => left && css`
    margin-left: ${ left };
  `}
`;

// Types
interface MarginProps {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}

// Exports
export const MarginContainer: React.FC<MarginProps> = ({ children, ...remainingProps }) => (
  <StyledMargin { ...remainingProps }>
    { children }
  </StyledMargin>
);


