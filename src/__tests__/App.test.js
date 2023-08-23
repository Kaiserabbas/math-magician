import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App component', () => {
  it('renders navigation links correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const homeLink = screen.getByTestId('home-component');
    const calculatorLink = screen.getByTestId('calculator-component');
    const quotesLink = screen.getByTestId('quote-display-component');

    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quotesLink).toBeInTheDocument();

    // Generate snapshot
    expect(screen.getByTestId('home-component')).toMatchSnapshot();
    expect(screen.getByTestId('calculator-component')).toMatchSnapshot();
    expect(screen.getByTestId('quote-display-component')).toMatchSnapshot();
  });

  it('renders the Home component when navigating to the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeComponent = screen.getByTestId('home-component');

    expect(homeComponent).toBeInTheDocument();
  });

  it('renders the Calculator component when navigating to the calculator path', () => {
    render(
      <MemoryRouter initialEntries={['/calculator']}>
        <App />
      </MemoryRouter>
    );

    const calculatorComponent = screen.getByTestId('calculator-component');

    expect(calculatorComponent).toBeInTheDocument();
  });

  it('renders the QuoteDisplay component when navigating to the quotes path', () => {
    render(
      <MemoryRouter initialEntries={['/quotes']}>
        <App />
      </MemoryRouter>
    );

    const quoteDisplayComponent = screen.getByTestId('quote-display-component');

    expect(quoteDisplayComponent).toBeInTheDocument();
  });
});
