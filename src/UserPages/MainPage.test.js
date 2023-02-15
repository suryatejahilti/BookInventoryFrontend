import React from 'react';
import { render, screen } from '@testing-library/react';
import Mainpage from './Mainpage';

describe('Mainpage', () => {
  test('renders navbar', () => {
    render(<Mainpage />);
    const navbar = screen.getByRole('banner');
    expect(navbar).toBeInTheDocument();
  });

  test('renders content', () => {
    render(<Mainpage />);
    const content = screen.getByRole('main');
    expect(content).toBeInTheDocument();
  });

  // add more tests for other functionality
});