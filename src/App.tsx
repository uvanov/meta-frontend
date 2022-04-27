// Import modules
import React, { useEffect } from 'react';

// Local modules
import { CEF } from './CEF';
import { Authentication } from './components/pages/authentication/Authentication';

// Exports
export const App = () => {

  useEffect(() => {
    window.CEF = CEF;
  }, []);

  return (
    <>
      <Authentication/>
    </>
  );
};

