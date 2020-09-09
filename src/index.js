import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';

const container = document.querySelector('#app');

const Example = () => <h1>test</h1>;

render(<Example />, container);
