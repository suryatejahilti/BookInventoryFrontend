import { render, screen, fireEvent } from '@testing-library/react';
import ToggleNavbar from './ToggleNavbar';

test('ToggleNavbar switches between book views', () => {
  const handleBookState = jest.fn();
  const handleGoogleBooksState = jest.fn();
  const handleAddBookState = jest.fn();

  render(<ToggleNavbar
    handleBookState={handleBookState}
    handleGoogleBooksState={handleGoogleBooksState}
    handleAddBookState={handleAddBookState}
  />);

  const booksLink = screen.getByText('Books');
  const googleBooksLink = screen.getByText('Google Books');
  const addBookLink = screen.getByText('AddBook');

  expect(booksLink).toBeInTheDocument();
  expect(googleBooksLink).toBeInTheDocument();
  expect(addBookLink).toBeInTheDocument();

  fireEvent.click(googleBooksLink);
  expect(handleGoogleBooksState).toHaveBeenCalledTimes(1);

  fireEvent.click(addBookLink);
  expect(handleAddBookState).toHaveBeenCalledTimes(1);

  fireEvent.click(booksLink);
  expect(handleBookState).toHaveBeenCalledTimes(1);
});