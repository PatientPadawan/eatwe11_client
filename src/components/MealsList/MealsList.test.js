import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MealsList from './index';
import DATASTORE from '../../datastore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MealsList meals={DATASTORE.meals} />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});