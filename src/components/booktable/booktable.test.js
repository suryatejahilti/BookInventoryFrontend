import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookTable from './BookTable';

describe('BookTable component', () => {
  test('displays the correct number of rows', () => {
    const { getAllByTestId } = render(<BookTable />);
    const rows = screen.getAllByTestId('tableRow');
    expect(rows).toHaveLength(5); // Assuming rowsPerPage is 5 in the component
  });

  test('displays the correct book info for each row', () => {
    const { getAllByTestId } = render(<BookTable />);
    const bookTitles = screen.getAllByTestId('bookTitle').map((title) => title.textContent);
    expect(bookTitles).toEqual([
      'The Catcher in the Rye',
      'To Kill a Mockingbird',
      '1984',
      'Pride and Prejudice',
      'Animal Farm'
    ]); // Assuming these are the book titles in the component
  });

  test('selects a row when clicked', () => {
    const { getAllByTestId } = render(<BookTable />);
    const firstRowCheckbox = screen.getAllByTestId('tableRowCheckbox')[0];
    fireEvent.click(firstRowCheckbox);
    expect(firstRowCheckbox.checked).toBe(true);
  });

  test('deletes selected books when delete button is clicked', () => {
    const deleteMock = jest.fn();
    const { getAllByTestId, getByRole } = render(<BookTable onDelete={deleteMock} />);
    const firstRowCheckbox = screen.getAllByTestId('tableRowCheckbox')[0];
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(firstRowCheckbox);
    fireEvent.click(deleteButton);
    expect(deleteMock).toHaveBeenCalledWith([1]); // Assuming the first book has bookId = 1
  });
});