import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AnthroQuiz from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AnthroQuiz />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});