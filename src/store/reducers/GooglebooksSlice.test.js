import { setGoogleBooks } from './GoogleBooksSlice';
import reducer from './GoogleBooksSlice';

describe('GoogleBooksSlice', () => {
  it('should return the initial state', () => {
    const initialState = {
      googlebooks: null,
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set the Google Books data', () => {
    const books = [{ id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }];
    const expectedState = {
      googlebooks: books,
    };
    const action = setGoogleBooks(books);

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});