import { axiosPrivate } from './axios';
import PostBook from './PostBook';

jest.mock('./axios');

describe('PostBook', () => {
  it('should post a book and return a response', async () => {
    const mockBook = {
      title: 'Test Book',
      author: 'Test Author',
      description: 'Test description',
      image: 'testimage.jpg'
    };
    const mockAuth = { user: 'testuser' };
    const mockBookRequest = { book: mockBook, user: mockAuth.user };
    const mockResponse = {
      data: {
        id: '1234',
        title: 'Test Book',
        author: 'Test Author',
        description: 'Test description',
        image: 'testimage.jpg'
      },
      status: 201
    };
    axiosPrivate.post.mockResolvedValue(mockResponse);

    const result = await PostBook(mockBook);

    expect(axiosPrivate.post).toHaveBeenCalledWith('/books', mockBookRequest);
    expect(result).toEqual(mockResponse);
  });

  it('should handle post errors', async () => {
    const mockBook = {
      title: 'Test Book',
      author: 'Test Author',
      description: 'Test description',
      image: 'testimage.jpg'
    };
    const mockAuth = { user: 'testuser' };
    const mockBookRequest = { book: mockBook, user: mockAuth.user };
    const mockError = {
      response: {
        data: 'Book title is required',
        status: 400,
        headers: {}
      }
    };
    axiosPrivate.post.mockRejectedValue(mockError);

    const result = await PostBook(mockBook);

    expect(axiosPrivate.post).toHaveBeenCalledWith('/books', mockBookRequest);
    expect(console.log).toHaveBeenCalledWith(mockError.response.data);
    expect(console.log).toHaveBeenCalledWith(mockError.response.status);
    expect(console.log).toHaveBeenCalledWith(mockError.response.headers);
  });
});