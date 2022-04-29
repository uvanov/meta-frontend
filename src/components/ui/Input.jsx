/** @jsxImportSource @emotion/react */
// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  css
} from '@emotion/react';

// Local modules
import {
  Flex,
  Typography
} from './index';

// Assets
import EyeIcon from '@images/icons/eye-icon.svg';
import EyeCrossedIcon from '@images/icons/eye-crossed-icon.svg';
import WarningIcon from '@images/icons/warning-icon.svg';
import ErrorHintBackgroundImage from '@images/input/error-hint-background.png';

// Styled Components
const StyledInputWrapper = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'isValid';
  }
})`
  position: relative;
  background-color: ${({ theme }) => theme.palette.darkbluegray};
  border: 2px solid transparent;
  border-radius: 9px;
  padding: 17px 27px 17px 17px;
  
  box-sizing: border-box;
  transition: border .1s;
  
  ${({ isValid, theme }) => !isValid && css`
    border: 2px solid ${ theme.palette.red };
  `}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;

const StyledInputIconWrapper = styled(Flex)`
  width: 61px;
  height: 61px;
  background-color: ${({ theme }) => theme.palette.darkgray};
  border-radius: 5px;
`;

const StyledInputLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.size.small};
  color: ${({ theme }) => theme.palette.gray};
  font-family: inherit;
  font-weight: 500;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.size.middle};
  background-color: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.palette.gray};
  
  &::placeholder {
    color: ${({ theme }) => theme.palette.gray};
  }
`;

const StyledInputVisibilityControlWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const ErrorHintWrapper = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'isValid';
  }
})`
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

// Exports
export const Input = (
  {
    variant,
    label = 'Label',
    Icon,
    placeholder = 'Placeholder',
    value,
    onChange,
    isValid = true,
    fullWidth = false,
    errorText,
    ...remainingProps
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
      fullWidth={ fullWidth }
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
          { label }
        </StyledInputLabel>
        <StyledInput
          type={ isInputValueHidden ? 'password' : 'text' }
          placeholder={ placeholder ? placeholder : CONFIG.DEFAULT_PLACEHOLDER }
          value={ value ? value : '' }
          onChange={ onChange }
          { ...remainingProps }
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
              { errorText }
            </Typography>
          </Flex>
        </ErrorHintWrapper>
      }
    </StyledInputWrapper>
  );
};

