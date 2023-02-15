import axios from 'axios';
import GetBooks from './GetBooks';

jest.mock('./axios');

describe('GetBooks', () => {
  it('should return a list of books', async () => {
    const mockResponse = { data: [{ id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }], status: 200 };
    axios.get.mockResolvedValue(mockResponse);

    const result = await GetBooks();

    expect(axios.get).toHaveBeenCalledWith('/books');
    expect(result).toEqual(mockResponse.data);
  });

  it('should handle errors', async () => {
    const mockError = { response: { data: {}, status: 404, headers: {} } };
    axios.get.mockRejectedValue(mockError);

    await GetBooks();

    expect(axios.get).toHaveBeenCalledWith('/books');
    expect(console.log).toHaveBeenCalledWith(mockError.response.data);
    expect(console.log).toHaveBeenCalledWith(mockError.response.status);
    expect(console.log).toHaveBeenCalledWith(mockError.response.headers);
  });
});