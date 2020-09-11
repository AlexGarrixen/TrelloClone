import React from 'react';
import { render } from 'react-dom';
import App from './routes';
import './styles/index.scss';

const container = document.querySelector('#app');

render(<App />, container);
