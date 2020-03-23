import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DashboardCanvas from './index';

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
      <DashboardCanvas macros={macros} />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});