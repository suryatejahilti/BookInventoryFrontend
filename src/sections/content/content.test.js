import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Content from './Content';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Content', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders "No Books Available" when there are no books', () => {
    useSelector.mockReturnValue([]);
    render(<Content />);
    const noBooksMessage = screen.getByText('No Books Available');
    expect(noBooksMessage).toBeInTheDocument();
  });

  test('renders Bookslist when there are books', () => {
    useSelector.mockReturnValue([{ id: 1, title: 'Book 1' }]);
    render(<Content />);
    const booksList = screen.getByTestId('books-list');
    expect(booksList).toBeInTheDocument();
  });
});
