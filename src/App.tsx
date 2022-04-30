// Import modules
import React, { useEffect } from 'react';

// Local modules
import { CEF } from './CEF';
import { Authentication } from './components/pages/authentication/Authentication';

window.CEF = CEF;

// Exports
export const App = () => {

  return (
    <>
      <Authentication/>
    </>
  );
};

