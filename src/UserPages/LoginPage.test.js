import { fireEvent, render, screen } from '@testing-library/react';
import LoginUser from '../apis/LoginUser';
import LoginPage from './LoginPage';

test('submitting the form calls the LoginUser function', () => {
  const setAuth = jest.fn();
  const expectedAuth = { user: { email: 'hello@gmail.com', password: 'password' } };
  jest.mock('../apis/LoginUser', () => {
    return jest.fn().mockResolvedValueOnce(expectedAuth);
  });

  render(<LoginPage />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole('button', { name: /login/i });

  fireEvent.change(emailInput, { target: { value: 'hello@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(loginButton);

  expect(LoginUser).toHaveBeenCalledWith({ username: 'hello@gmail.com', password: 'password' });
  expect(setAuth).toHaveBeenCalledWith(expectedAuth);
});