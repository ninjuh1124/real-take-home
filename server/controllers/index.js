const { processMission } = require('../utils/mission');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const mission = (req, res) => {
	/**
	 * @type {{
	 * areaSize: number[],
	 * position: { x: number, y: number, direction: 'N'|'S'|'E'|'W' },
	 * instructions: string
	 * }}
	 */
	console.log(req.body);
	const { areaSize, position, instructions } = req.body;
	// check body
	if (
		!(Array.isArray(areaSize) && areaSize.length === 2) || // check for area size
		!(position?.x >= 0) || // check for position object
		!(position?.y >= 0) ||
		!(typeof instructions === 'string') // ensure instructions provided
	) {
		res.status(400).send({
			status: 'ERROR',
			body: 'Insufficient Parameters',
		});
		return;
	}

	// run mission
	try {
		const missionDetails = processMission(areaSize, position, instructions);

		/* you can imagine if we wanted, saving a record of the mission here */
		console.log(missionDetails);

		res.status(200).send({
			status: 'OK',
			body: missionDetails.slice(-1)[0],
		});
	} catch (error) {
		console.log(error);
		res.status(200).send({
			error,
			status: 'ERROR',
			body: 'Something went wrong!',
		});
	}
};

module.exports = { mission };
