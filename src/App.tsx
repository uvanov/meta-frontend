// Import modules
import React from 'react';

// Local modules
import { CEF } from './CEF';

// UIs
import { Authentication } from '@pages/authentication/Authentication';
import { SelectCharacter } from '@pages/select-character/SelectCharacter';
import { CharacterCreator } from '@pages/character-creator/CharacterCreator';

window.CEF = CEF;

// Exports
export const App = () => {

  return (
    <>
      <Authentication/>
      <SelectCharacter/>
      <CharacterCreator/>
    </>
  );
};

