const { processMission } = require('./mission');

describe('runs mission', () => {
	test('with empty instructions', () => {
		const pos = processMission([0, 0], { x: 0, y: 0, direction: 'N' }, '');
		expect(pos).toHaveLength(1);
		expect(pos[0]).toMatchObject({ x: 0, y: 0, direction: 'N' });
	});
	test('that starts out of bounds', () => {
		expect(() => {
			processMission([0, 0], { x: 0, y: 1, direction: 'N' }, '');
		}).toThrow();
	});
	test('that stays within bounds', () => {
		const pos = processMission(
			[2, 2],
			{ x: 1, y: 1, direction: 'N' },
			'MRMRMMRMMRMM'
		);
		const expectedPos = [
			{ x: 1, y: 1, direction: 'N' },
			{ x: 1, y: 2, direction: 'N' },
			{ x: 1, y: 2, direction: 'E' },
			{ x: 2, y: 2, direction: 'E' },
			{ x: 2, y: 2, direction: 'S' },
			{ x: 2, y: 1, direction: 'S' },
			{ x: 2, y: 0, direction: 'S' },
			{ x: 2, y: 0, direction: 'W' },
			{ x: 1, y: 0, direction: 'W' },
			{ x: 0, y: 0, direction: 'W' },
			{ x: 0, y: 0, direction: 'N' },
			{ x: 0, y: 1, direction: 'N' },
			{ x: 0, y: 2, direction: 'N' },
		];
		pos.forEach((p, i) => {
			expect(p).toMatchObject(expectedPos[i]);
		});
	});
	test('that goes out of bounds', () => {
		expect(() => {
			processMission([0, 0], { x: 0, y: 0, direction: 'N' }, 'M');
		}).toThrow();
	});
});
