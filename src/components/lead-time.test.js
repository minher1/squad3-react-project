import { render, screen } from '@testing-library/react';
import LeadTime from './lead-time';
import userEvent from "@testing-library/user-event";

test('allow users to add leadTime', () => {
    render(< LeadTime />);

    const leadtime = screen.getByLabelText("leadTime");
    userEvent.type(leadtime, "1");
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByText("1 minute")).toBeVisible();

});


test('allow users to add leadTime plural', () => {
    render(< LeadTime />);

    const leadtime = screen.getByLabelText("leadTime");
    userEvent.type(leadtime, "2");
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByText("2 minutes")).toBeVisible();

});