import DeleteBook from './DeleteBook';
const axios = require('axios');

jest.mock('axios');

describe('DeleteBook', () => {
  it('should delete a book', async () => {
    const auth = { user: 'username' };
    const id = 'book-id';
    const mockResponse = { data: {}, status: 200 };
    axios.delete.mockResolvedValue(mockResponse);

    await DeleteBook(id);

    expect(axios.delete).toHaveBeenCalledWith(`/books/${id}/${auth.user}`);
  });

  it('should handle errors', async () => {
    const auth = { user: 'username' };
    const id = 'book-id';
    const mockError = { response: { data: {}, status: 404, headers: {} } };
    axios.delete.mockRejectedValue(mockError);

    await DeleteBook(id);

    expect(axios.delete).toHaveBeenCalledWith(`/books/${id}/${auth.user}`);
    expect(console.log).toHaveBeenCalledWith(mockError.response.data);
    expect(console.log).toHaveBeenCalledWith(mockError.response.status);
    expect(console.log).toHaveBeenCalledWith(mockError.response.headers);
  });
});