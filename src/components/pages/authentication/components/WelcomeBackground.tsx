// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Assets
import WelcomeBackgroundImage from '../../../../assets/images/authentication/authentication-welcome-background.png';

// Styled Components
const StyledWelcomeBackground = styled.div`
  position: absolute;
  z-index: 1;
  width: 700px;
  height: 1000px;
  background-image: url(${WelcomeBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: -250px;
`;

// Exports
export const WelcomeBackground = ({ ...remainingProps }) => (
  <StyledWelcomeBackground { ...remainingProps }/>
);
