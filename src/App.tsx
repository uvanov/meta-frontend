// Import modules
import React from 'react';
import { CEF } from './CEF';
import { Authentication } from './components/pages/authentication/Authentication';

// Exports
export const App = () => {

  window.CEF = CEF;

  return (
    <>
      <Authentication/>
    </>
  );
};

