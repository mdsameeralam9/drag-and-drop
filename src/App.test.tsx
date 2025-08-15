// src/App.test.tsx

import { render, screen } from '@testing-library/react'; //
import App from './App'; //

describe('App', () => { //
  it('renders the "Vite + React" heading', () => { //
    render(<App />); //

    // Use getByRole to find the heading element and then check its text content.
    // The 'heading' role is semantic and preferred over directly checking text alone.
    const headingElement = screen.getByRole('heading', { name: 'Vite + React' }); //
    expect(headingElement).toBeInTheDocument(); //
  });
});
