import React from 'react';
import '@emotion/react';
// Import local modules
import { CEF } from './CEF';
import { themeConfig } from './lib/theme';

// Change Window structure
declare global {
  interface Window {
    CEF: typeof CEF
  }
}

// Expand Theme type
type ThemeConfig = typeof themeConfig;
declare module '@emotion/react' {
  export interface Theme extends ThemeConfig {}
}


