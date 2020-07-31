import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('home page', ()=>{
  test('renders main title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Bienvenidos a Twitter/i);
    expect(linkElement).toBeInTheDocument();
  });
});
