/** READ ONLY, DO NOT MODIFY */
const CARDINAL_DIRECTIONS = {
	E: { x: 1, y: 0 },
	S: { x: 0, y: -1 },
	W: { x: -1, y: 0 },
	N: { x: 0, y: 1 },
};

/**
 * @description outputs the resultin position for a given position and instruction
 * @param {{ direction: 'E'|'S'|'W'|'N', x: number, y: number }} position
 * @param {'L'|'R'|'M'} instruction
 */
const resolveInstruction = (position, instruction) => {
	const newPosition = { ...position };

	/*
	i way overcomplicated this. my initial thinking when going down this road
	was that i wanted to make the directions the rover could face more
	extensible (e.g. NW), which turned the code for rotating left or right into
	something less than perfectly clear. the performance impact for this should
	be negligible, but in a more real-world scenario, i would either make a more
	simplified abstraction, or try to get a better idea of what kind of future
	enhancements we would be looking at.
	*/
	let directionIndex;
	switch (instruction) {
		case 'L':
			directionIndex = Object.keys(CARDINAL_DIRECTIONS).findIndex(
				(v) => position.direction.toUpperCase() === v
			);
			directionIndex = directionIndex - 1;
			if (directionIndex < 0) {
				directionIndex =
					directionIndex + Object.keys(CARDINAL_DIRECTIONS).length;
			}
			newPosition.direction =
				Object.keys(CARDINAL_DIRECTIONS)[directionIndex];
			break;
		case 'R':
			directionIndex = Object.keys(CARDINAL_DIRECTIONS).findIndex(
				(v) => position.direction === v
			);
			directionIndex =
				(directionIndex + 1) % Object.keys(CARDINAL_DIRECTIONS).length;
			newPosition.direction =
				Object.keys(CARDINAL_DIRECTIONS)[directionIndex];
			break;
		case 'M':
			newPosition.x =
				position.x + CARDINAL_DIRECTIONS[position.direction].x;
			newPosition.y =
				position.y + CARDINAL_DIRECTIONS[position.direction].y;
			break;
	}

	return newPosition;
};

module.exports = { resolveInstruction, CARDINAL_DIRECTIONS };
