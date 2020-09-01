import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../redux/store';

test('Renders NavBar', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const headerElement = getByText(/NHL/i);
  expect(headerElement).toBeInTheDocument();
});
