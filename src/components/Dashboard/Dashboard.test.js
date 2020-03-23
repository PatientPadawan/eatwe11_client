import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './index';

const macros = {
  TDEE: 2264.5,
  protein: 623,
  carb: 1359,
  fat: 283,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Dashboard macros={macros} />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});