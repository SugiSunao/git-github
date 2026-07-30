import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders OpenSSL text link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Solved OpenSSL problem/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});