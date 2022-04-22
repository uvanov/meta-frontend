// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Local modules
import { App } from './App';
import './index.css';
import { store } from './store/store';

// Render App
ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
