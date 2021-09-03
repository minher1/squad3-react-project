import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Recovery Times/i);
  const secondElement = screen.getByText(/Deployments/i);
  expect(linkElement).toBeInTheDocument();
  expect(secondElement).toBeInTheDocument();
});

test('fail rate update when new deployment and recovery time is added', () => {
  render(<App />);

  const dateField = screen.getByLabelText("Deployment Date");
  userEvent.type(dateField, "2021-08-23")
  const timeField = screen.getByLabelText("Deployment Time");
  userEvent.type(timeField, "16:04")
  userEvent.click(screen.getByText("Add Deployment"));

  const startDateField = screen.getByLabelText("Start Date");
  const startTimeField = screen.getByLabelText("Start Time");
  const durationField = screen.getByLabelText("Duration");
  userEvent.type(startDateField, "2021-09-01");
  userEvent.type(startTimeField, "2245");
  userEvent.type(durationField, "15");
  userEvent.click(screen.getByText("Add Recovery Time"));

  expect(screen.getByText(/100.0%/)).toBeVisible();
});