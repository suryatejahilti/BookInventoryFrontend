import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BookCard from './card';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const book = {
  bookid: 1,
  title: 'Test Book Title',
  author: 'Test Book Author',
  price: 9.99,
  quantity: 5,
  description: 'Test Book Description',
};

describe('BookCard', () => {
  it('should render correctly', () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <BookCard book={book} />
      </Provider>
    );
    expect(screen.getByTestId('bookCard')).toBeInTheDocument();
    expect(screen.getByText('Test Book Title...')).toBeInTheDocument();
    expect(screen.getByText('Test Book Author')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'http://books.google.com/books/publisher/content?id=_Nb4DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73S2icZCRBKRuEfgxJirXZ0gXtzMchViOFirNq-ot3m5IONO16sZkP0t8ybbKY3Dy4mWwzABBFrX_mfq_H43dLP9x8xpFwfNpi0qTLdHVPGcfDCpz5IIBA2FOhpI0u1HJ8H5Wo0&source=gbs_api'
    );
  });

  it('should show a menu when clicking on the MoreVertIcon', () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <BookCard book={book} />
      </Provider>
    );
    expect(screen.queryByText('Edit Book')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Edit Book')).toBeInTheDocument();
    expect(screen.getByText('Delete Book')).toBeInTheDocument();
  });
});