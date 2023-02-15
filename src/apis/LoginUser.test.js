import axios from './axios';
import LoginUser from './LoginUser';

jest.mock('./axios');

describe('LoginUser', () => {
  it('should log in a user and return user details', async () => {
    const mockLoginRequest = { username: 'testuser', password: 'testpassword' };
    const mockResponse = {
      data: {
        accessToken: 'mockAccessToken',
        roles: ['admin', 'user'],
        name: 'Test User'
      },
      status: 200
    };
    axios.post.mockResolvedValue(mockResponse);

    const result = await LoginUser(mockLoginRequest);

    expect(axios.post).toHaveBeenCalledWith('/login', mockLoginRequest);
    expect(result.user).toEqual('Test User');
    expect(result.roles).toEqual(['admin', 'user']);
    expect(result.accessToken).toEqual('mockAccessToken');
  });

  it('should handle login errors', async () => {
    const mockLoginRequest = { username: 'testuser', password: 'testpassword' };
    const mockError = {
      response: {
        data: 'Invalid username or password',
        status: 401,
        headers: {}
      }
    };
    axios.post.mockRejectedValue(mockError);

    const result = await LoginUser(mockLoginRequest);

    expect(axios.post).toHaveBeenCalledWith('/login', mockLoginRequest);
    expect(console.log).toHaveBeenCalledWith(mockError.response.data);
    expect(console.log).toHaveBeenCalledWith(mockError.response.status);
    expect(console.log).toHaveBeenCalledWith(mockError.response.headers);
  });
});