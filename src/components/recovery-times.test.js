import { render, screen } from '@testing-library/react';
import RecoveryTimes from './recovery-times';
import userEvent from "@testing-library/user-event";

test('allow users to add recovery times', () => {
    render(< RecoveryTimes />);

    const startDateField = screen.getByLabelText("Start Date");
    const startTimeField = screen.getByLabelText("Start Time");
    const durationField = screen.getByLabelText("Duration");
    const linkElement = screen.getByText(/Recovery Times/i);
    userEvent.type(startDateField, "2021-09-01");
    userEvent.type(startTimeField, "2245");
    userEvent.type(durationField, "15");
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByText("09/01/2021 10:45:00 PM")).toBeVisible();
    expect(screen.getByText(/^15$/)).toBeVisible();
    expect(linkElement).toBeInTheDocument();
});

test('calculate MTTR', () => {
    render(< RecoveryTimes />);
    const startDateField = screen.getByLabelText("Start Date");
    const startTimeField = screen.getByLabelText("Start Time");
    const durationField = screen.getByLabelText("Duration");
    const linkElement = screen.getByText(/Recovery Times/i);
    userEvent.type(startDateField, "2021-09-01");
    userEvent.type(startTimeField, "2245");
    userEvent.type(durationField, "15");
    userEvent.click(screen.getByRole("button"));
    userEvent.type(startDateField, "2021-09-01");
    userEvent.type(startTimeField, "2245");
    userEvent.type(durationField, "25");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/^20/)).toBeVisible();
});