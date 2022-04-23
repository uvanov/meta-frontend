// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local components
import { PageSwitcherButton } from './PageSwitcherButton';

// Assets
import AuthorizationButtonIcon from '../../../../assets/images/authentication/authorization-button-icon.svg';
import RegistrationButtonIcon from '../../../../assets/images/authentication/registration-button-icon.svg';

// Styled Components
const StyledPageSwitcher = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  position: absolute;
  top: 0;
  left: 0;
  
  width: 100vh;    
  height: 87px;
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-100%);
  
  &::before{
    content: '';
    display: block;
    width: 1000px;
    height: 1000px;
    
    position: absolute;
    left: -140px;
    top: -1200px;
    z-index: -1;
    
    background: rgba(255, 255, 255, .5);
    filter: blur(555px);
  }
`;

// Exports
export const PageSwitcher = () => {
  return (
    <StyledPageSwitcher>
      <PageSwitcherButton
        variant='default'
        text='АВТОРИЗАЦИЯ'
        iconSrc={ AuthorizationButtonIcon }
      />
      <PageSwitcherButton
        variant='red'
        text='РЕГИСТРАЦИЯ'
        iconSrc={ RegistrationButtonIcon }
      />
    </StyledPageSwitcher>
  );
};
