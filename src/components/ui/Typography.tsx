/** @jsxImportSource @emotion/react */
// Import modules
import React from 'react';
import styled from '@emotion/styled';
import {
  css,
  Theme
} from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';

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
  
   ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  color: ${({ color, theme }) => color === 'gray' ? theme.palette.gray : color};
`;

const title: VariantFunction = ({ typography: { size } }) => css`
  font-weight: 800;
  font-size: ${ size.title };
`;

const subtitle: VariantFunction = ({ typography: { size } }) => css`
  font-weight: 600;
  font-size: ${ size.subtitle };
`;

const middle: VariantFunction = ({ typography: { size } }) => css`
  font-size: ${ size.middle };
`;

const small: VariantFunction = ({ typography: { size } }) => css`
  font-size: ${ size.small };
`;

// Constants
const TYPOGRAPHY_VARIANT_MAP = {
  title, subtitle, middle, small
};

// Types
// Этот тип нужен для функций, чтобы нормально можно было работать с темой
type VariantFunction = (theme: Theme) => SerializedStyles;

interface TypographyProps {
  variant: keyof typeof TYPOGRAPHY_VARIANT_MAP;
  color: string;
  align?: 'left' | 'center' | 'right';
  wrap?: 'normal' | 'no-wrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
  uppercase?: boolean;
  underline?: boolean;
  bold?: boolean;
  fullWidth?: boolean;
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
