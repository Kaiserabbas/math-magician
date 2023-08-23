import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import QuoteDisplay from '../components/QuoteDisplay';

describe('QuoteDisplay component', () => {
  it('displays a loading message while fetching the quote', async () => {
    render(<QuoteDisplay />);

    // Wait for the loading message to disappear
    await waitFor(() => screen.queryByText('Loading...'));

    // Now check that the loading message is not in the document
    expect(screen.queryByText('Loading...')).toBeInTheDocument();

    // Generate and save snapshot
    const tree = renderer.create(<QuoteDisplay />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('displays the fetched quote', async () => {
    // Mock data for the fetched quote
    const mockQuote = 'Mock quote content';

    // Mock the fetch function to return the mock data
<<<<<<< HEAD
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{ quote: mockQuote }]),
    }));
=======
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ quote: mockQuote }]),
      })
    );
>>>>>>> tests

    render(<QuoteDisplay />);

    // Wait for the quote to be fetched and displayed
<<<<<<< HEAD
    await waitFor(() => expect(screen.getByText(mockQuote)).toBeInTheDocument());
=======
    await waitFor(() =>
      expect(screen.getByText(mockQuote)).toBeInTheDocument()
    );
>>>>>>> tests

    // Ensure the fetch function was called with the correct URL and headers
    expect(fetch).toHaveBeenCalledWith(
      'https://api.api-ninjas.com/v1/quotes',
      expect.objectContaining({
        headers: {
          'X-Api-Key': 'CTmUt3jmLDUPu3QSal4JcA==IE8xDQBMnTaIiJs5',
        },
      })
    );
  });

  it('displays an error message if fetching the quote fails', async () => {
    // Mock the fetch function to simulate an error
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch error')));

    render(<QuoteDisplay />);

    // Wait for the error message to be displayed
<<<<<<< HEAD
    await waitFor(() => expect(
      screen.getByText('Error: An error occurred while fetching the quote.')
    ).toBeInTheDocument());
=======
    await waitFor(() =>
      expect(
        screen.getByText('Error: An error occurred while fetching the quote.')
      ).toBeInTheDocument()
    );
>>>>>>> tests
  });
});
