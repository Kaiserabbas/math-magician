// Calculator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  it('renders the component correctly', () => {
    render(<Calculator />);
    expect(screen.getByText("Let's do some math")).toBeInTheDocument();
  });

  it('handles number button clicks and updates display', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));

    expect(display).toHaveTextContent('123');
  });

  it('handles operation button clicks and updates display', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(display).toHaveTextContent('8');
  });

  it('handles decimal button click and updates display', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));

    expect(display).toHaveTextContent('1.5');
  });

  it('handles AC button click and resets display', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('AC'));

    expect(display).toHaveTextContent('0');
  });
  it('handles +/- button click and toggles sign', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('+/-'));

    expect(display).toHaveTextContent('-9');
  });

  it('handles % button click and calculates percentage', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('%'));

    expect(display).toHaveTextContent('0.08');
  });

  it('handles multiple operations correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(display).toHaveTextContent('6');
  });

  it('matches the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
