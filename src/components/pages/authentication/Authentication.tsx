// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import { PageSwitcher } from './components/PageSwitcher';

// Assets
import AuthenticationBackgroundImage from '../../../assets/images/authentication/authentication-background-image.jpg';
import AuthenticationWelcomeImage from '../../../assets/images/authentication/authentication-welcome-background.png';


// Styled Components
const AuthenticationBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${AuthenticationBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AuthenticationWelcome = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

// Types
type ViewType = 'registration' | 'authorization' | 'recovery';

// Exports
export const Authentication = () => {

  const [view, setView] = useState<ViewType>('registration');

  return (
    <AuthenticationBackground>
      <PageSwitcher/>
    </AuthenticationBackground>
  );
};
