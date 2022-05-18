// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Header } from './components/Header';
import { Hints } from './components/Hints';
import { Information } from '@pages/hud/components/Information';

// Styled Components
const StyledHud = styled.div`
  position: relative;
  height: 100%;
`;

// Exports
export const Hud = () => (
  <StyledHud>
    <Header/>
    <Hints/>
    <Information/>
  </StyledHud>
);
