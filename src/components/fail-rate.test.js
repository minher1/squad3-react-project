import { render, screen } from '@testing-library/react';
import FailRate from './fail-rate';

test('allow users to see the change fail rate', () => {
    render(< FailRate />);
    const titleElement = screen.getByText("Change Fail Rate");
    expect(titleElement).toBeInTheDocument();
});

