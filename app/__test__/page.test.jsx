import { render, screen } from '@testing-library/react';
import Home from '../page';
import '@testing-library/jest-dom';

describe('Home', () => {
    it('renders the Logo component', () => {
        render(<Home />);
        const logoElement = screen.getByText('V');
        expect(logoElement).toBeInTheDocument();
    });

    it('renders the main header', () => {
        render(<Home />);
        const mainHeader = screen.getByText('Welcome to Verdant Sphere');
        expect(mainHeader).toBeInTheDocument();
        expect(mainHeader).toHaveStyle({
            color: 'white',
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '3rem',
        });
    });

    it('renders the subheader with correct style', () => {
        render(<Home />);
        const subHeader = screen.getByText('Toxic Free Social Media');
        expect(subHeader).toBeInTheDocument();
        expect(subHeader).toHaveStyle({
            color: 'white',
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '2rem',
            fontStyle: 'italic',
        });
    });
});
