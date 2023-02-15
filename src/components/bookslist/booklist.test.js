import { render, screen } from '@testing-library/react';
import BooksList from './BooksList';

test('renders a grid of book cards', () => {
  const mockBooks = [
    {
      bookid: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: 10.99,
      quantity: 5,
      description: 'This is book 1',
    },
    {
      bookid: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: 12.99,
      quantity: 3,
      description: 'This is book 2',
    },
  ];

  // Mock the useSelector hook to return the mock books data
  jest.mock('react-redux', () => ({
    useSelector: jest.fn().mockImplementation((selector) => selector(mockBooks)),
  }));

  const { getByText } = render(<BooksList />);

  // Check that each book card is rendered with the correct title
  mockBooks.forEach((book) => {
    expect(screen.getByText(book.title)).toBeInTheDocument();
  });
});