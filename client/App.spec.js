import App from './App';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('renders inputs', () => {
	test('size x input', () => {
		render(<App />);
		waitFor(() => expect(screen.getByTestId('sizeX')).toBeVisible());
	});
	test('size y input', () => {
		render(<App />);
		waitFor(() => expect(screen.getByTestId('sizeY')).toBeVisible());
	});
	test('position x input', () => {
		render(<App />);
		waitFor(() => expect(screen.getByTestId('posX')).toBeVisible());
	});
	test('position y input', () => {
		render(<App />);
		waitFor(() => expect(screen.getByTestId('posY')).toBeVisible());
	});
	test('direction input', () => {
		render(<App />);
		waitFor(() => expect(screen.getByTestId('direction')).toBeVisible());
	});
	test('instructions input', () => {
		render(<App />);
		waitFor(() => expect(screen.getByTestId('instructions')).toBeVisible());
	});
});

describe('renders results', () => {
	describe('successful mission', () => {
		test('results div', () => {
			render(<App />);
			fireEvent.click(screen.getByTestId('submit'));
			waitFor(() => expect(screen.getByTestId('results')).toBeVisible());
		});
		test('coordinates', () => {
			render(<App />);
			fireEvent.click(screen.getByTestId('submit'));
			waitFor(() =>
				expect(screen.getByTestId('coordinates')).toHaveTextContent(
					'(0, 0)'
				)
			);
		});
		test('direction', () => {
			render(<App />);
			fireEvent.click(screen.getByTestId('submit'));
			waitFor(() =>
				expect(screen.getByTestId('direction')).toHaveTextContent(
					'N'
				)
			);
		});
	});
});
