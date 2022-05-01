// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { useAppSelector } from '@hooks/state';
import { Authorization } from './components/Authorization';
import { Recovery } from './components/Recovery';
import { PageSwitcher } from './components/PageSwitcher';
import { Registration } from './components/Registration';
import { WelcomeBackground } from './components/WelcomeBackground';
import { Flex } from '@ui/index';

// Assets
import AuthenticationBackgroundImage from '@images/authentication/authentication-background-image.jpg';

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


// Exports
export const Authentication = () => {

  const isShown = useAppSelector(state => state.authentication.isShown);
  const view = useAppSelector(state => state.authentication.view);

  const VIEW_MAP = {
    registration: <Registration/>,
    authorization: <Authorization/>,
    recovery: <Recovery/>,
  };

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
              { VIEW_MAP[view] }
              <WelcomeBackground/>
            </Flex>
          </AuthenticationBackground>
        )
      }
    </>
  );
};
