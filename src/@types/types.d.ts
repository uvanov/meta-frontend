import "@emotion/react";
// Import local modules
import { CEF } from '../CEF';
import { themeConfig } from '../lib/theme';

// Change Window structure
declare global {
  interface Window {
    CEF: typeof CEF
  }
}

declare module "@emotion/react" {
  export interface Theme extends themeConfig {}
}


