const { resolveInstruction } = require('./instruction');

describe('process individual instruction', () => {
	describe('to turn left', () => {
		test('from facing north', () => {
			const pos = resolveInstruction(
				{
					direction: 'N',
					x: 0,
					y: 0,
				},
				'L'
			);
			expect(pos.direction).toBe('W');
		});
		test('from facing west', () => {
			const pos = resolveInstruction(
				{
					direction: 'W',
					x: 0,
					y: 0,
				},
				'L'
			);
			expect(pos.direction).toBe('S');
		});
		test('from facing south', () => {
			const pos = resolveInstruction(
				{
					direction: 'S',
					x: 0,
					y: 0,
				},
				'L'
			);
			expect(pos.direction).toBe('E');
		});
		test('from facing east', () => {
			const pos = resolveInstruction(
				{
					direction: 'E',
					x: 0,
					y: 0,
				},
				'L'
			);
			expect(pos.direction).toBe('N');
		});
	});

	describe('to turn right', () => {
		test('from facing north', () => {
			const pos = resolveInstruction(
				{
					direction: 'N',
					x: 0,
					y: 0,
				},
				'R'
			);
			expect(pos.direction).toBe('E');
		});
		test('from facing west', () => {
			const pos = resolveInstruction(
				{
					direction: 'W',
					x: 0,
					y: 0,
				},
				'R'
			);
			expect(pos.direction).toBe('N');
		});
		test('from facing south', () => {
			const pos = resolveInstruction(
				{
					direction: 'S',
					x: 0,
					y: 0,
				},
				'R'
			);
			expect(pos.direction).toBe('W');
		});
		test('from facing east', () => {
			const pos = resolveInstruction(
				{
					direction: 'E',
					x: 0,
					y: 0,
				},
				'R'
			);
			expect(pos.direction).toBe('S');
		});
	});

	describe('to move forward', () => {
		test('from facing north', () => {
			const pos = resolveInstruction(
				{
					direction: 'N',
					x: 0,
					y: 0,
				},
				'M'
			);
			expect(pos).toMatchObject({ x: 0, y: 1, direction: 'N' });
		});
		test('from facing west', () => {
			const pos = resolveInstruction(
				{
					direction: 'W',
					x: 0,
					y: 0,
				},
				'M'
			);
			expect(pos).toMatchObject({ x: -1, y: 0, direction: 'W' });
		});
		test('from facing south', () => {
			const pos = resolveInstruction(
				{
					direction: 'S',
					x: 0,
					y: 0,
				},
				'M'
			);
			expect(pos).toMatchObject({ x: 0, y: -1, direction: 'S' });
		});
		test('from facing east', () => {
			const pos = resolveInstruction(
				{
					direction: 'E',
					x: 0,
					y: 0,
				},
				'M'
			);
			expect(pos).toMatchObject({ x: 1, y: 0, direction: 'E' });
		});
	});
});
