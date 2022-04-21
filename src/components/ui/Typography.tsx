/** @jsxImportSource @emotion/react */
// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Styled Components
const BaseTypography = styled.p<Omit<TypographyProps, 'variant'>>`
  ${({ align }) => align && css`
    text-align: ${ align };
  `}
  
  ${({ wrap }) => wrap && css`
    white-space: ${ wrap };
  `}
  
  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `}
  
  ${({ underline }) => underline && css`
    text-decoration: underline;
  `}
  
  ${({ bold }) => bold && css`
    font-weight: bold;
  `}
  
  color: ${({ color }) => color === 'gray' ? '#817D8E' : color};
`;

const title = css`
  font-weight: 800;
  font-size: 36px;
`;

const subtitle = css`
  font-weight: 600;
  font-size: 24px;
`;

const paragraph = css`
  font-size: 14px;
`;

const middle = css`
  font-size: 18px;
`;

const small = css`
  font-size: 14px;
`;

// Constants
const TYPOGRAPHY_VARIANT_MAP = {
  title, subtitle, paragraph, middle, small
};

// Types
interface TypographyProps {
  variant: keyof typeof TYPOGRAPHY_VARIANT_MAP;
  color: 'black' | 'white' | 'gray';
  align?: 'left' | 'center' | 'right';
  wrap?: 'normal' | 'no-wrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
  uppercase?: boolean;
  underline?: boolean;
  bold?: boolean;
}

// Exports
export const Typography: React.FC<TypographyProps> = (
  {
    children,
    variant,
    ...remainingProps
  }) => {
  return (
    <BaseTypography
      css={ TYPOGRAPHY_VARIANT_MAP[variant] }
      { ...remainingProps }
    >
      { children }
    </BaseTypography>
  );
};
