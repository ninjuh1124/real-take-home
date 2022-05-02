import React from 'react';

const Results = ({ results }) => {
	return (
		<div data-testid="results" className="container">
			<h2>
				The mission ended in{' '}
				{results.status === 'OK' ? (
					<span className="text-success">SUCCESS</span>
				) : (
					<span className="text-danger">FAILURE</span>
				)}
			</h2>
			{results.error && (
				<>
					<p data-testid="errorMessage" className="text-danger">{results.error.message}</p>
					<p>
						Last known position (X, Y):{' '}
						<strong data-testid="coordinates" className="text-danger">
							({results.error.details.slice(-1)[0].x},{' '}
							{results.error.details.slice(-1)[0].y})
						</strong>
					</p>
					<p>
						Last known bearing:{' '}
						<strong data-testid="direction" className="text-danger">
							{(() => {
								switch (
									results.error.details.slice(-1)[0].direction
								) {
									case 'N':
										return 'North';
									case 'E':
										return 'East';
									case 'S':
										return 'South';
									case 'W':
										return 'West';
									default:
										return 'Unknown';
								}
							})()}
						</strong>
					</p>
				</>
			)}
			{results.body && (
				<>
					<p>
						Current position (X, Y):{' '}
						<strong
							data-testid="coordinates"
							className="text-success"
						>
							({results.body.x}, {results.body.y})
						</strong>
					</p>
					<p>
						Current bearing:{' '}
						<strong
							data-testid="direction"
							className="text-success"
						>
							{(() => {
								switch (results.body.direction) {
									case 'N':
										return 'North';
									case 'E':
										return 'East';
									case 'S':
										return 'South';
									case 'W':
										return 'West';
									default:
										return 'Unknown';
								}
							})()}
						</strong>
					</p>
				</>
			)}
		</div>
	);
};

export default Results;
