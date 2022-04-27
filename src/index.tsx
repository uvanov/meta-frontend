// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as ThemeProvider } from './lib/theme';

// Local modules
import { App } from './App';
import { store } from './store/store';

// Render App
ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
