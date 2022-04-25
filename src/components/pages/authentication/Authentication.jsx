// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import { useAppDispatch, useAppSelector } from '../../../hooks/state';
import { PageSwitcher } from './components/PageSwitcher';
import { Registration } from './components/Registration';
import { WelcomeBackground } from './components/WelcomeBackground';
import { Flex } from '../../ui';

// Assets
import AuthenticationBackgroundImage from '../../../assets/images/authentication/authentication-background-image.jpg';
import AuthenticationWelcomeImage from '../../../assets/images/authentication/authentication-welcome-background.png';


// Styled Components
const AuthenticationBackground = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${AuthenticationBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

// Types
type ViewType = 'registration' | 'authorization' | 'recovery';

// Exports
export const Authentication = () => {

  const [view, setView] = useState<ViewType>('registration');
  const isShown = useAppSelector(state => state.authentication.isShown);

  return (
    <>
      {
        isShown && (
          <AuthenticationBackground
            justifyContent='center'
            alignItems='center'
          >
            <PageSwitcher/>
            <Flex
              justifyContent='center'
              alignItems='center'
            >
              <WelcomeBackground/>
              <Registration/>
            </Flex>

          </AuthenticationBackground>
        )
      }
    </>
  );
};
