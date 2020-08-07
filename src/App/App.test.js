import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders NavBar', () => {
  const { getByText } = render(<App />);
  const headberElement = getByText(/NHL/i);
  expect(headberElement).toBeInTheDocument();
});
