// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local components
import { PageSwitcherButton } from './PageSwitcherButton';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../hooks/state';
import { authenticationSlice } from '../../../../store/slices/AuthenticationSlice';


// Assets
import AuthorizationButtonIcon from '@images/icons/user-icon.svg';
import RegistrationButtonIcon from '@images/icons/registration-button-icon.svg';

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

  const authenticationView = useAppSelector(state => state.authentication.view);
  const dispatch = useAppDispatch();
  const { setAuthenticationView } = authenticationSlice.actions;

  const switchView = (view) => {
    // Предотвращение мисскликов игрока, чтобы не было лишних ре-рендеров
    if(authenticationView === view){
      return;
    }

    dispatch(setAuthenticationView({ view }));
  };


  return (
    <StyledPageSwitcher>
      <PageSwitcherButton
        variant='default'
        text='АВТОРИЗАЦИЯ'
        iconSrc={ AuthorizationButtonIcon }
        onClick={ () => switchView('authorization') }
      />
      <PageSwitcherButton
        variant='red'
        text='РЕГИСТРАЦИЯ'
        iconSrc={ RegistrationButtonIcon }
        onClick={ () => switchView('registration') }
      />
    </StyledPageSwitcher>
  );
};
