import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

test('renders the logo with the letter V', () => {
    render(<Logo />);
    const logoElement = screen.getByText('V');
    expect(logoElement).toBeInTheDocument();
});
