import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddDeployment from './add-deployment';

test('allow user to inout text', () => {
    render(<AddDeployment />);
    const dateField = screen.getByLabelText("Deployment Date");
    userEvent.type(dateField, "2021-08-23")
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.type(timeField, "16:04")
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/8\/23\/2021/i)).toBeVisible();
    expect(screen.getByText(/4:04:00 PM/i)).toBeVisible();
});