// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Styled Components
const StyledGrid = styled.div<GridProps>`
  display: grid;
  // TODO: Написать нормальную систему кастомных столбцов, например ['40px', '1fr', '20px']
  ${(props) => props.columnLayout
    ? css`
        grid-template-columns: ${props.columnLayout};
      `
    : css`
        grid-template-columns: repeat(
          ${props.columns}, 
          ${props.columnWidth ? props.columnWidth : '1fr'}
        );
      `
  }
  
  ${(props) => props.rows && css`
    grid-template-rows: repeat(${ props.rows }, 1fr);
  `}
  
  ${(props) => props.columnGap && css`
    column-gap: ${props.columnGap}px;
  `}
  
  ${(props) => props.rowGap && css`
    row-gap: ${props.rowGap}px;
  `}
  
  ${(props) => props.justifyItems && css`
    justify-items: ${props.justifyItems};
  `}
  
  ${(props) => props.alignItems && css`
    align-items: ${props.alignItems};
  `}
  
  ${(props) => props.fullWidth && 'width: 100%;'}
  ${(props) => props.fullHeight && 'height: 100%;'}
`;

// Types
interface GridProps {
  columns?: number;
  columnWidth?: string;
  columnLayout?: string;
  rows?: number;
  columnGap?: number;
  rowGap?: number;
  justifyItems?: string;
  alignItems?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

// Exports
export const Grid: React.FC<GridProps> = (
  {
    children,
    ...remainingProps
  }
) => {
  return (
    <StyledGrid
      { ...remainingProps }
    >
      { children }
    </StyledGrid>
  );
};
