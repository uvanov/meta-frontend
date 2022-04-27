// Import modules
import React from 'react';
import {
  css,
  Global,
  Theme,
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
        globalFontFamily: 'Montserrat, system-ui',
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
    darkbluegray: '#1B1A23',
    darkgray: '#14131b'
  }
};

interface Props {
  theme?: Theme;
}

// Create custom ThemeProvider
export const Provider: React.FC<Props> = ({ children, theme = themeConfig }) => (
  <ThemeProvider theme={ theme }>
    <Global
      styles={ (theme) => {
        return css`

          @font-face {
            font-family: ${ theme.typography.fonts.montserrat.medium.fontName };
            src: ${ theme.typography.fonts.montserrat.medium.src }
          }
          
          @font-face {
            font-family: ${ theme.typography.fonts.montserrat.semibold.fontName };
            src: ${ theme.typography.fonts.montserrat.semibold.src }
          }
          
          @font-face {
            font-family: ${ theme.typography.fonts.montserrat.bold.fontName };
            src: ${ theme.typography.fonts.montserrat.bold.src }
          }
          
          @font-face {
            font-family: ${ theme.typography.fonts.montserrat.extrabold.fontName };
            src: ${ theme.typography.fonts.montserrat.extrabold.src }
          }
          
          body {
            margin: 0;
            overflow: hidden;
          }
          
          * {
            font-family: ${ theme.typography.fonts.montserrat.globalFontFamily };
          }
          
          #root {
            width: 100%;
            height: 100vh;
            position: relative;
          }
          
          ul, input{
            padding: 0;
          }
          
          p {
            margin: 0;
          }
        `;
      } }
    />
    { children }
  </ThemeProvider>
);

