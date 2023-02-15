import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import ExpandedCard from './ExpandedCard';

describe('ExpandedCard component', () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    BooksSlice: {
      expanded: {
        bookId: '123',
        title: 'Test Book',
        author: 'Test Author',
        price: 10,
        quantity: 2,
        description: 'Test description',
      },
    },
  });

  it('should render the modal and form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ExpandedCard />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Add Test Book from google books')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Author')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Copies')).toBeInTheDocument();
    expect(screen.getByLabelText('Price')).toBeInTheDocument();
    expect(screen.getByText('Add Book')).toBeInTheDocument();
  });

  it('should submit the form with valid inputs', async () => {
    const handleNewBookMock = jest.fn();
    const navigateMock = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ExpandedCard handleNewBook={handleNewBookMock} navigate={navigateMock} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Book' } });
    fireEvent.change(screen.getByLabelText('Author'), { target: { value: 'New Author' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'New Description' } });
    fireEvent.change(screen.getByLabelText('Copies'), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText('Price'), { target: { value: '15' } });
    fireEvent.click(screen.getByText('Add Book'));

    expect(handleNewBookMock).toHaveBeenCalledWith({
      bookId: '123',
      title: 'New Book',
      author: 'New Author',
      price: 15,
      quantity: 3,
      description: 'New Description',
    });
    expect(navigateMock).toHaveBeenCalledWith('/main');
  });

  it('should display a warning message with invalid inputs', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ExpandedCard />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Author'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Copies'), { target: { value: '0' } });
    fireEvent.change(screen.getByLabelText('Price'), { target: { value: '0' } });
    fireEvent.click(screen.getByText('Add Book'));

    expect(screen.getByText('All fields must be filled.')).toBeInTheDocument();
  });
});