import { render, fireEvent, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Counter from '../lib/Counter.svelte';

describe('Counter Component', () => {
	it('should render with initial count of 0', () => {
		render(Counter);
		const countDisplay = screen.getByText(/The count:/i);
		expect(countDisplay.textContent).toContain('0');
	});

	it('should increment the count when clicked', async () => {
		render(Counter);
		const incrementButton = screen.getByRole('button', { name: /Increment/i });
		const countDisplay = screen.getByText(/The count:/i);

		await fireEvent.click(incrementButton);

		expect(countDisplay.textContent).toContain('1');
	});

	it('should decrement the count when clicked', async () => {
		render(Counter);
		const decrementButton = screen.getByRole('button', { name: /Decrement/i });
		const countDisplay = screen.getByText(/The count:/i);

		await fireEvent.click(decrementButton);

		expect(countDisplay.textContent).toContain('-1');
	});

	it('should reset the count when clicked', async () => {
		render(Counter);
		const incrementButton = screen.getByRole('button', { name: /Increment/i });
		const resetButton = screen.getByRole('button', { name: /Reset/i });
		const countDisplay = screen.getByText(/The count:/i);

		// Increment first
		await fireEvent.click(incrementButton);
		expect(countDisplay.textContent).toContain('1');

		// Reset
		await fireEvent.click(resetButton);
		expect(countDisplay.textContent).toContain('0');
	});
});