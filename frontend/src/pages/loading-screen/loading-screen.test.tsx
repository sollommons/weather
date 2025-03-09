import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LoadingScreen } from './loading-screen';

describe('LoadingScreen', () => {
  it('should display loading text', () => {
    render(<LoadingScreen />);

    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass('loading-text');

  });
});