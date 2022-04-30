// Import modules
import React, { useEffect } from 'react';

// Local modules
import { CEF } from './CEF';

// UIs
import { Authentication } from '@pages/authentication/Authentication';
import { SelectCharacter } from '@pages/select-character/SelectCharacter';

// Exports
export const App = () => {

  useEffect(() => {
    window.CEF = CEF;
  }, []);

  return (
    <>
      <Authentication/>
      <SelectCharacter/>
    </>
  );
};

