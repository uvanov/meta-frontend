/** @jsxImportSource @emotion/react */
// Import modules
import React, { FunctionComponent, SVGProps, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import {
  Flex,
  Typography
} from './index';

// Assets
import EyeIcon from '../../assets/images/eye-icon.svg';
import EyeCrossedIcon from '../../assets/images/eye-crossed-icon.svg';
import ErrorHintBackgroundImage from '../../assets/images/error-hint-background.png';
import WarningIcon from '../../assets/images/warning-icon.svg';


// Styled Components
const StyledInputWrapper = styled(Flex)<{ isValid: boolean }>`
  position: relative;
  background-color: #1B1A23;
  border: 2px solid transparent;
  border-radius: 9px;
  padding: 17px 27px 17px 17px;
  
  font-family: Montserrat, sans-serif;
  
  box-sizing: border-box;
  transition: border .1s;
  
  ${({ isValid }) => !isValid && css`
    border: 2px solid #FF3E3E;
  `}
`;

const StyledInputIconWrapper = styled(Flex)`
  background: rgba(20, 19, 27, 0.56);
  border-radius: 5px;
  padding: 20px;
`;

const StyledInputLabel = styled.span`
  font-size: 14px;
  color: #817D8E;
  font-family: inherit;
  font-weight: 500;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #817D8E;
  
  &::placeholder {
    color: #817D8E;
  }
`;

const StyledInputVisibilityControlWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const ErrorHintWrapper = styled(Flex)<{ show: boolean }>`
  position: absolute;
  left: 100%;
  
  width: 400px;
  height: 100px;
  padding: 16px 24px 16px 46px;
  box-sizing: border-box;
  
  background-image: url(${ErrorHintBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  
  transform: translateX(100px);
  opacity: 0;
  
  ${({ show }) => show && css`
    transform: translateX(0);
    opacity: 1;
  `}
  
  transition: transform .2s ease, opacity .2s ease;
`;

const ErrorHintIconWrapper = styled(Flex)`
  min-width: 56px;
  height: 56px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

// Constants
const CONFIG = {
  DEFAULT_PLACEHOLDER: 'Placeholder'
};

// Interfaces
type InputVariantsType = 'text' | 'password';

interface InputProps {
  variant: InputVariantsType;
  label: string;
  value: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>> | string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  invalidErrorText?: string
}

// Exports
export const Input: React.FC<InputProps> = (
  {
    variant,
    label,
    Icon,
    placeholder,
    value,
    onChange,
    isValid,
    invalidErrorText
  }) => {

  const isVariantPassword = variant === 'password';
  const [isInputValueHidden, setIsInputHidden] = useState(isVariantPassword);

  const changeInputValueVisibility = () => {
    setIsInputHidden(!isInputValueHidden);
  };

  return (
    <StyledInputWrapper
      alignItems='center'
      gap='26px'
      isValid={ isValid }
    >
      <StyledInputIconWrapper
        justifyContent='center'
        alignItems='center'
      >
        <Icon/>
      </StyledInputIconWrapper>
      <Flex
        direction='column'
        gap='3px'
      >
        <StyledInputLabel>
          {label}
        </StyledInputLabel>
        <StyledInput
          type={ isInputValueHidden ? 'password' : 'text' }
          placeholder={ placeholder ? placeholder : CONFIG.DEFAULT_PLACEHOLDER }
          value={ value ? value : '' }
          onChange={ onChange }
        />
      </Flex>

      {
        variant === 'password' && (
          <StyledInputVisibilityControlWrapper
            onClick={ () => changeInputValueVisibility() }
          >
            <img
              src={ isInputValueHidden ? EyeCrossedIcon : EyeIcon }
              alt=''
            />
          </StyledInputVisibilityControlWrapper>
        )
      }

      {

        <ErrorHintWrapper
          gap='12px'
          alignItems='center'
          show={ !isValid }
        >
          <ErrorHintIconWrapper
            justifyContent='center'
            alignItems='center'
          >
            <img
              src={ WarningIcon }
              alt=''
            />
          </ErrorHintIconWrapper>

          <Flex
            direction='column'
            gap='1px'
          >
            <Typography
              variant='middle'
              color='black'
              bold
            >
              Ошибка
            </Typography>
            <Typography
              variant='small'
              color='black'
            >
              {invalidErrorText}
            </Typography>
          </Flex>
        </ErrorHintWrapper>

      }

    </StyledInputWrapper>
  );
};

