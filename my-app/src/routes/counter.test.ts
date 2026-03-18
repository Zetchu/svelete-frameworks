import { render, fireEvent, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Counter from '../lib/Counter.svelte';


describe('Counter Component', () => {
  
  it('should render with initial count of 0', () => {
    render(Counter);
    const button = screen.getByRole('button');
    expect(button.textContent).toContain('Count: 0');
  });

  it('should increment the count when clicked', async () => {
    render(Counter);
    const button = screen.getByRole('button');

    // Act: Click the button
    await fireEvent.click(button);

    // Assert: Check if the text updated
    expect(button.textContent).toContain('Count: 1');
  });
});