import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddDeployment from './add-deployment';

const mockSetDeploymentsCount = jest.fn();

test('allow user to inout text', () => {
    render(<AddDeployment deploymentsCount={mockSetDeploymentsCount} />);
    const dateField = screen.getByLabelText("Deployment Date");
    userEvent.type(dateField, "2021-08-23")
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/8\/23\/2021/i)).toBeVisible();
    expect(screen.getByText(/4:04:00 PM/i)).toBeVisible();
});

test('frequency deployment is zero when no deployment is active', () => {
    render(<AddDeployment deploymentsCount={mockSetDeploymentsCount} />);
    expect(screen.getByText(/Frequency/i)).toBeVisible();
    expect(screen.getByText(/0\/week/i)).toBeVisible();
});

test('frequency deployment is one when one deployment is active', () => {
    render(<AddDeployment deploymentsCount={mockSetDeploymentsCount} />);
    const dateField = screen.getByLabelText("Deployment Date");
    userEvent.type(dateField, "2021-08-23")
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Frequency/i)).toBeVisible();
    expect(screen.getByText(/1\/week/i)).toBeVisible();
});

test('frequency deployment is two when two deployment are active in same week', () => {
    render(<AddDeployment deploymentsCount={mockSetDeploymentsCount} />);
    const dateField = screen.getByLabelText("Deployment Date");
    userEvent.type(dateField, "2021-08-23")
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    userEvent.type(dateField, "2021-08-24")
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Frequency/i)).toBeVisible();
    expect(screen.getByText(/2\/week/i)).toBeVisible();
});

test('frequency deployment is two when two deployment are active not in the same week', () => {
    render(<AddDeployment deploymentsCount={mockSetDeploymentsCount} />);
    const dateField = screen.getByLabelText("Deployment Date");
    userEvent.type(dateField, "2021-08-23")
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    userEvent.type(dateField, "2021-08-16")
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Frequency/i)).toBeVisible();
    expect(screen.getByText(/1\/week/i)).toBeVisible();
});

test('frequency deployment is 0.5 when two deployment are active in 4 weeks', () => {
    render(<AddDeployment deploymentsCount={mockSetDeploymentsCount} />);
    const dateField = screen.getByLabelText("Deployment Date");
    userEvent.type(dateField, "2021-09-23")
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    userEvent.type(dateField, "2021-09-03")
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Frequency/i)).toBeVisible();
    expect(screen.getByText(/0.5\/week/i)).toBeVisible();
});