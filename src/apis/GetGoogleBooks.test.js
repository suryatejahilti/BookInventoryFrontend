import axios from 'axios';
import GetGoogleBooks from './GetGoogleBooks';

jest.mock('./axios');

describe('GetGoogleBooks', () => {
  it('should search for Google Books and return a list of results', async () => {
    const searchId = 'search-term';
    const mockResponse = { data: [{ id: '123', title: 'Book 1' }, { id: '456', title: 'Book 2' }], status: 200 };
    axios.get.mockResolvedValue(mockResponse);

    const result = await GetGoogleBooks(searchId);

    expect(axios.get).toHaveBeenCalledWith(`/googlebooks/${searchId}`);
    expect(result).toEqual(mockResponse.data);
  });

  it('should handle errors', async () => {
    const searchId = 'search-term';
    const mockError = { response: { data: {}, status: 404, headers: {} } };
    axios.get.mockRejectedValue(mockError);

    await GetGoogleBooks(searchId);

    expect(axios.get).toHaveBeenCalledWith(`/googlebooks/${searchId}`);
    expect(console.log).toHaveBeenCalledWith(mockError.response.data);
    expect(console.log).toHaveBeenCalledWith(mockError.response.status);
    expect(console.log).toHaveBeenCalledWith(mockError.response.headers);
  });
});