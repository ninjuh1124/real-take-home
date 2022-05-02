const { resolveInstruction } = require('./instruction');

/**
 * @param {number[]} areaSize
 * @param {{ x: number, y: number, direction: 'N'|'S'|'E'|'W' }} initialPosition
 * @param {string} instructions
 * @returns {{ x: number, y: number, direction: 'N'|'S'|'E'|'W' }} full mission log with position for each instruction
 */
const processMission = (areaSize, initialPosition, instructions) => {
	if (initialPosition.x > areaSize[0] || initialPosition.y > areaSize[1]) {
		throw {
			message: 'Out of bounds!',
			details: [initialPosition],
		};
	}
	return instructions
		.toUpperCase()
		.split('')
		/*
		for the purposes of this assignment, i'm ignoring any instruction that
		was not included in the spec. if this is not what is desired, the filter
		can be removed and an additional check would be made in the reducer to
		throw an "Unexpected instruction" error.
		*/
		.filter((i) => ['L', 'R', 'M'].includes(i))
		.reduce(
			(missionDetails, instruction) => {
				missionDetails.push(
					resolveInstruction(missionDetails.slice(-1)[0], instruction)
				);
				const newPosition = missionDetails.slice(-1)[0];

				// validate position
				if (
					newPosition.x < 0 ||
					newPosition.y < 0 ||
					newPosition.x > areaSize[0] ||
					newPosition.y > areaSize[1]
				) {
					throw {
						message: 'Out of bounds!',
						details: missionDetails,
					};
				}

				return missionDetails;
			},
			[initialPosition]
		);
};

module.exports = { processMission };
