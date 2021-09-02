import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Recovery Times/i);
  const secondElement = screen.getByText(/Deployments/i);
  expect(linkElement).toBeInTheDocument();
  expect(secondElement).toBeInTheDocument();
});