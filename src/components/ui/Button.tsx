/** @jsxImportSource @emotion/react */
// Import modules
import React from 'react';
import styled from '@emotion/styled';
import {
  css,
  Theme
} from '@emotion/react';

// Assets
import { ReactComponent as ArrowRight } from '@images/icons/arrow-right.svg';

// Styled Components
const BaseButton = styled.button<{ fullWidth?: boolean, large?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  border: 0;
  border-radius: 9px;
  font-size: 14px;
  padding: 29px;
  color: white;
  text-transform: uppercase;
  
  font-family: Montserrat, sans-serif;
  
  ${({ fullWidth }) => fullWidth && css`width: 100%`}
  ${({ large }) => large && css`padding: 39px;`}
`;

const DefaultButtonVariant = () => css`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(7px);
`;

const DangerButtonVariant = (theme: Theme) => css`
  background: ${ theme.palette.red };
  box-shadow: 0 49px 106px -32px ${ theme.palette.red }, inset 0px 0px 24px rgba(255,169,169,0.55);
  font-weight: 500;
`;

const ButtonArrowLabel = styled.div`
  position: absolute;
  right: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px;
  background: rgb(229, 47, 47, 0.8);
  border-radius: 8px;
`;

// Constants
// Создаём карту вариантов кнопок, чтобы потом ссылаться благодаря ключам на блоки стилей.
const BUTTON_VARIANTS_MAP = {
  default: DefaultButtonVariant,
  danger: DangerButtonVariant
};

// Interfaces
interface ButtonProps {
  variant: keyof typeof BUTTON_VARIANTS_MAP; // Создаём литерал, на основе параметров из BUTTON_VARIANTS_MAP
  large?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

// Exports
export const Button: React.FC<ButtonProps> = ({ children, variant, large, ...remainingProps }) => {

  const styleVariant = BUTTON_VARIANTS_MAP[variant];

  return (
    <BaseButton
      css={ styleVariant }
      { ...remainingProps }
      large={ large }
    >
      { children }

      {
        variant === 'danger' && (
          <ButtonArrowLabel>
            <ArrowRight/>
          </ButtonArrowLabel>
        )
      }
    </BaseButton>
  );
};
