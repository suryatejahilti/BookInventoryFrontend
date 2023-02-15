import { configureStore } from "@reduxjs/toolkit";
import BooksSlice, {
  handleAddBookState,
  handleEditBookClick,
  handleExpandClick,
  setBooks,
} from "./BooksSlice";

describe("BooksSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { books: BooksSlice.reducer },
    });
  });

  it("should set books", () => {
    const books = [{ id: 1, title: "Book 1" }, { id: 2, title: "Book 2" }];
    store.dispatch(setBooks(books));
    expect(store.getState().books.books).toEqual(books);
  });

  it("should handle add book state", () => {
    store.dispatch(handleAddBookState());
    expect(store.getState().books.addBookState).toBe(true);
    store.dispatch(handleAddBookState());
    expect(store.getState().books.addBookState).toBe(false);
  });

  it("should handle expand click", () => {
    store.dispatch(handleExpandClick(1));
    expect(store.getState().books.expanded).toBe(1);
  });

  it("should handle edit book click", () => {
    const book = { id: 1, title: "Book 1" };
    store.dispatch(handleEditBookClick(book));
    expect(store.getState().books.expanded).toBe(null);
    expect(store.getState().books.editBook).toBe(book);
  });
});