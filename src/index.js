import React from 'react';
import { render } from 'react-dom';
import App from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import './styles/index.scss';

const container = document.querySelector('#app');

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  container
);
