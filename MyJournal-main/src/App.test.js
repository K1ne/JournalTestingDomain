import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App title="Journal"/>);
  const headingElement = screen.getByText(/Journal/i);
  expect(headingElement).toBeInTheDocument();
});
