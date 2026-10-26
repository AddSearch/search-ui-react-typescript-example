import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';
import App from './App';

beforeEach(() => {
  // AddSearch libraries are loaded from a CDN in index.html, so stub them here
  window.AddSearchClient = vi.fn();
  window.AddSearchUI = vi.fn(function () {
    return {
      start: vi.fn(),
      searchField: vi.fn(),
      searchResults: vi.fn(),
    };
  });
});

test('renders the search UI example header', () => {
  render(<App />);
  const header = screen.getByText(/Search UI example/i);
  expect(header).toBeInTheDocument();
});
