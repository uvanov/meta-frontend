import '@emotion/react';
// Import local modules
import { CEF } from './CEF';
import { themeConfig } from '@lib/theme';

// Change Window structure
type CefType = typeof CEF;

declare global {
  interface Window {
    CEF: CefType
  }
}

// Expand Theme type
type ThemeConfig = typeof themeConfig;
declare module '@emotion/react' {
  export interface Theme extends ThemeConfig {}
}


