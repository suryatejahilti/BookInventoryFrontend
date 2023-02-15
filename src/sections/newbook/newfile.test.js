import { render, fireEvent, screen } from '@testing-library/react';
import AddNewBook from './AddNewBook';

describe('AddNewBook', () => {
  test('should display success message when form is submitted with valid values', async () => {
    // render component
    render(<AddNewBook />);
    
    // fill out form
    const titleInput = screen.getByLabelText('Title');
    fireEvent.change(titleInput, { target: { value: 'The Lord of the Rings' } });
    
    const authorInput = screen.getByLabelText('Author');
    fireEvent.change(authorInput, { target: { value: 'J.R.R. Tolkien' } });
    
    const descriptionInput = screen.getByLabelText('Description');
    fireEvent.change(descriptionInput, { target: { value: 'A great fantasy novel' } });
    
    const copiesInput = screen.getByLabelText('Copies');
    fireEvent.change(copiesInput, { target: { value: '3' } });
    
    const priceInput = screen.getByLabelText('Price');
    fireEvent.change(priceInput, { target: { value: '25.99' } });
    
    // submit form
    const submitButton = screen.getByText('Add Book');
    fireEvent.click(submitButton);
    
    // check that success message is displayed
    const successMessage = await screen.findByRole('alert', { name: 'Book added Successfully' });
    expect(successMessage).toBeInTheDocument();
  });

  test('should display error message when form is submitted with invalid values', async () => {
    // render component
    render(<AddNewBook />);
    
    // fill out form with invalid values
    const titleInput = screen.getByLabelText('Title');
    fireEvent.change(titleInput, { target: { value: '' } });
    
    const authorInput = screen.getByLabelText('Author');
    fireEvent.change(authorInput, { target: { value: '' } });
    
    const descriptionInput = screen.getByLabelText('Description');
    fireEvent.change(descriptionInput, { target: { value: '' } });
    
    const copiesInput = screen.getByLabelText('Copies');
    fireEvent.change(copiesInput, { target: { value: '0' } });
    
    const priceInput = screen.getByLabelText('Price');
    fireEvent.change(priceInput, { target: { value: '0' } });
    
    // submit form
    const submitButton = screen.getByText('Add Book');
    fireEvent.click(submitButton);
    
    // check that error message is displayed
    const errorMessage = await screen.findByRole('alert', { name: 'All fields must be filled.' });
    expect(errorMessage).toBeInTheDocument();
  });
});