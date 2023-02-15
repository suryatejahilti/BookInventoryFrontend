import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EditBook from './EditBook';
import { handleEditBookClick } from '../../store/reducers/BooksSlice';

const mockStore = configureStore([]);

describe('EditBook', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      books: {
        editBook: {
          bookId: 1,
          title: 'Test Book',
          author: 'Test Author',
          price: 10,
          quantity: 5,
          description: 'Test Description'
        }
      }
    });
  });

  it('renders the edit book form', () => {
    render(
      <Provider store={store}>
        <EditBook />
      </Provider>
    );

    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Author')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Copies')).toBeInTheDocument();
    expect(screen.getByLabelText('Price')).toBeInTheDocument();
  });

  it('displays a success message when the book is updated successfully', () => {
    render(
      <Provider store={store}>
        <EditBook />
      </Provider>
    );

    const submitButton = screen.getByText('Update Book');
    fireEvent.click(submitButton);

    expect(screen.getByRole('alert', { name: 'Book added Successfully' })).toBeInTheDocument();
  });

  it('displays a warning message when the form is submitted with empty fields', () => {
    render(
      <Provider store={store}>
        <EditBook />
      </Provider>
    );

    const submitButton = screen.getByText('Update Book');
    fireEvent.click(submitButton);

    expect(screen.getByRole('alert', { name: 'All fields must be filled.' })).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    render(
      <Provider store={store}>
        <EditBook />
      </Provider>
    );

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    expect(store.getActions()).toEqual([handleEditBookClick(null)]);
  });
});