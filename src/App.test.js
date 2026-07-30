import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

// Mock fetch so unit tests don't try to make real network calls
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve('0'),
    })
  );
});

// Test 1: Smoke Test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Test 2: Attribute & Security Check
test('verifies external link points to correct URL and opens safely in new tab', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Solved OpenSSL/i });
  
  expect(linkElement.getAttribute('href')).toBe('https://reactjs.org');
  expect(linkElement.getAttribute('target')).toBe('_blank');
  expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer');
});

// Test 3: Element Properties & Class Check
test('verifies React logo image has correct alt attribute and CSS class', () => {
  render(<App />);
  const logoImage = screen.getByAltText('logo');
  
  expect(logoImage.tagName).toBe('IMG');
  expect(logoImage.className).toBe('App-logo');
});

// Test 4: Container Structure Check
test('verifies root container applies the main App class', () => {
  const { container } = render(<App />);
  expect(container.firstChild.className).toBe('App');
});