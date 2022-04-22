// Import modules
import React from 'react';
import {
  css,
  Global,
  ThemeProvider
} from '@emotion/react';

// Init Theme Config
export const themeConfig = {
  typography: {
    size: {
      title: '36px',
      subtitle: '24px',
      middle: '18px',
      small: '14px'
    },
    fonts: {
      montserrat: {
        medium: {
          src: '/fonts/montserrat/Montserrat-Medium.ttf',
          fontName: 'Montserrat Medium',
          fontFamily: 'Montserrat Medium, system-ui'
        },
        semibold: {
          src: '/fonts/montserrat/Montserrat-SemiBold.ttf',
          fontName: 'Montserrat SemiBold',
          fontFamily: 'Montserrat SemiBold, system-ui'
        },
        bold: {
          src: '/fonts/montserrat/Montserrat-Bold.ttf',
          fontName: 'Montserrat Bold',
          fontFamily: 'Montserrat Bold, system-ui'
        },
        extrabold: {
          src: '/fonts/montserrat/Montserrat-ExtraBold.ttf',
          fontName: 'Montserrat ExtraBold',
          fontFamily: 'Montserrat ExtraBold, system-ui'
        }
      },
      roboto: {
        medium: {
          src: '/fonts/roboto/Roboto-Medium.ttf',
          fontName: 'Roboto Medium',
          fontFamily: 'Roboto Medium, system-ui'
        }
      }
    }
  },
  palette: {
    white: '#ffffff',
    black: '#000000',
    red: '#FF3E3E',
    orange: '#FFA14A',
    gray: '#817D8E',
    bluegray: '#1D1C28',
    darkgray: '#14131b'
  }
};

// Create custom ThemeProvider
export const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={ themeConfig }>
    <Global
      styles={ (theme) => {
        // @ts-ignore
        console.log(theme.palette);
        return css``;
      } }
    />
    { children }
  </ThemeProvider>
);
